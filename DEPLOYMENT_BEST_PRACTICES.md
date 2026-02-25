# Best Practices & Lessons Learned

This document captures the key lessons learned from resolving 10+ deployment errors during Railway deployment setup.

## Production URL

**Live Site:** https://aaichangemanagement-production.up.railway.app

---

## Table of Contents
1. [Asset Import Best Practices](#asset-import-best-practices)
2. [Native Module Dependencies](#native-module-dependencies)
3. [Tailwind CSS Version Compatibility](#tailwind-css-version-compatibility)
4. [Build Configuration](#build-configuration)
5. [Railway Deployment](#railway-deployment)
6. [Cross-Platform Scripts](#cross-platform-scripts)
7. [Package Management](#package-management)
8. [Error Prevention Checklist](#error-prevention-checklist)

---

## Asset Import Best Practices

### ❌ **DON'T**: Use Figma-specific import protocols
```typescript
// ❌ BAD - Won't work in Vite
import logo from "figma:asset/807f885fa72b7ecbd447e415c09330fff63efc7f.png";
```

### ✅ **DO**: Use relative paths to actual asset files
```typescript
// ✅ GOOD - Works everywhere
import logo from "../../assets/807f885fa72b7ecbd447e415c09330fff63efc7f.png";
```

**Key Lessons:**
- Always use standard import paths that work across build tools
- Keep assets in a dedicated `src/assets/` directory
- Use relative paths from the importing file
- Never rely on tool-specific protocols (like `figma:asset/`)

---

## Native Module Dependencies

### The Problem
Native modules (like `@rollup/rollup-linux-x64-gnu`, `lightningcss`) are **optional dependencies** that:
- May not install with `npm ci` (known npm bug)
- Are platform-specific (Linux vs Windows)
- Can cause build failures if missing

### ✅ **Best Practices**

#### 1. Use `npm install` Instead of `npm ci` for Railway
```json
// railway.json
{
  "build": {
    "buildCommand": "npm install && npm run build"  // ✅ Not npm ci
  }
}
```

**Why:** `npm install` handles optional dependencies better than `npm ci`

#### 2. Configure `.npmrc` for Optional Dependencies
```
include=optional
legacy-peer-deps=false
```

#### 3. Avoid Native Module Dependencies When Possible
- **Tailwind CSS v4** uses `lightningcss` (native module) → **Use v3 instead**
- **Rollup v4** uses native binaries → Consider if v3 works for your needs
- Prefer pure JavaScript implementations when available

#### 4. Don't Override Major Versions Incompatibly
```json
// ❌ BAD - Vite 6 requires Rollup 4
"overrides": {
  "rollup": "3.29.4"  // Breaks Vite 6!
}
```

**Key Lessons:**
- Native modules are the #1 source of deployment failures
- Use `npm install` for better optional dependency handling
- Prefer tools without native dependencies when possible
- Never override versions that break tool compatibility

---

## Tailwind CSS Version Compatibility

### ❌ **DON'T**: Mix Tailwind v4 syntax with v3
```css
/* ❌ BAD - Tailwind v4 syntax in v3 project */
@theme inline {
  --color-border: var(--border);
}
```

### ✅ **DO**: Use consistent version syntax
```css
/* ✅ GOOD - Standard CSS variables */
:root {
  --color-border: var(--border);
}
```

### ✅ **DO**: Define all colors in `tailwind.config.js`
```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",  // ✅ Required for border-border class
        background: "var(--color-background)",
        // ... all colors
      }
    }
  }
}
```

### ✅ **DO**: Use CSS directly instead of `@apply` for complex cases
```css
/* ❌ Can fail if class doesn't exist */
@apply border-border;

/* ✅ More reliable */
border-color: var(--color-border);
```

**Key Lessons:**
- Stick to one Tailwind version (v3 or v4, not both)
- Define all custom colors in `tailwind.config.js`
- Use CSS variables directly when `@apply` causes issues
- Test builds locally before deploying

---

## Build Configuration

### ✅ **Best Practices**

#### 1. Consistent Build Output Directory
```typescript
// vite.config.ts
build: {
  outDir: 'build',  // ✅ Matches server.js
}

// server.js
app.use(express.static(join(__dirname, 'build')));  // ✅ Same directory
```

**Critical:** The `outDir` in `vite.config.ts` MUST match the directory in `server.js`

#### 2. Use Node to Run Vite (Avoids Permission Issues)
```json
// package.json
{
  "scripts": {
    "build": "node node_modules/vite/bin/vite.js build"  // ✅ More reliable
  }
}
```

#### 3. Set Base Path Correctly
```typescript
// vite.config.ts
export default defineConfig({
  base: '/',  // ✅ For root deployment
  // base: '/my-app/'  // Only if deploying to subdirectory
})
```

**Key Lessons:**
- Always verify `outDir` matches server static directory
- Use `node` to run Vite binaries (avoids permission issues)
- Set `base: '/'` for root deployments
- Test build output locally before deploying

---

## Railway Deployment

### ✅ **Best Practices**

#### 1. Use `railway.json` for Configuration
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "RAILPACK",
    "buildCommand": "npm install && npm run build"  // ✅ npm install, not npm ci
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

#### 2. Specify Node Version
```json
// package.json
{
  "engines": {
    "node": ">=20"  // ✅ Explicit version requirement
  }
}
```

#### 3. Create `nixpacks.toml` as Fallback
```toml
# nixpacks.toml (if Railway switches builders)
[phases.setup]
nixPkgs = ["nodejs_20"]

[phases.install]
cmds = ["npm install"]  # ✅ Not npm ci
```

#### 4. Always Include `server.js` for SPAs
```javascript
// server.js - Required for Vite SPAs on Railway
import express from 'express';
// ... serves static files and handles SPA routing
```

**Key Lessons:**
- Use `npm install` instead of `npm ci` for Railway (better optional deps)
- Specify Node version in `engines` field
- Create both `railway.json` and `nixpacks.toml` for flexibility
- Always include Express server for Vite SPAs

---

## Cross-Platform Scripts

### ❌ **DON'T**: Use shell-specific syntax
```json
// ❌ BAD - Doesn't work on Windows CMD
"postinstall": "npm install package || true"
```

### ✅ **DO**: Use Node.js scripts for cross-platform compatibility
```javascript
// scripts/install-native.js
import { execSync } from 'child_process';
import os from 'os';

if (os.platform() === 'linux') {
  try {
    execSync('npm install --include=optional package', { stdio: 'inherit' });
  } catch (error) {
    // Handle gracefully
  }
}
```

**Key Lessons:**
- Never use `|| true` or shell operators in npm scripts
- Use Node.js scripts for cross-platform compatibility
- Check platform before installing platform-specific packages
- Handle errors gracefully in scripts

---

## Package Management

### ✅ **Best Practices**

#### 1. Move Build Tools to `dependencies` (Not `devDependencies`)
```json
{
  "dependencies": {
    "vite": "6.3.5",  // ✅ In dependencies for Railway
    "@vitejs/plugin-react": "4.7.0"
  }
}
```

**Why:** Railway skips `devDependencies` in production mode

#### 2. Regenerate Lock File After Major Changes
```bash
# After changing package.json significantly
del package-lock.json
npm install
# Commit the new lock file
```

#### 3. Use `.npmrc` for Configuration
```
include=optional
legacy-peer-deps=false
```

#### 4. Don't Use Overrides That Break Compatibility
```json
// ❌ BAD - Breaks Vite 6
"overrides": {
  "rollup": "3.29.4"  // Vite 6 needs Rollup 4!
}
```

**Key Lessons:**
- Build tools must be in `dependencies` for Railway
- Regenerate lock files after major dependency changes
- Use `.npmrc` to configure npm behavior
- Never override versions that break tool compatibility

---

## Error Prevention Checklist

### Before First Deployment

- [ ] **Assets**: All imports use relative paths (no `figma:asset/` or similar)
- [ ] **Build Tools**: Vite and plugins in `dependencies` (not `devDependencies`)
- [ ] **Build Script**: Uses `node node_modules/vite/bin/vite.js build`
- [ ] **Output Directory**: `outDir` in `vite.config.ts` matches `server.js`
- [ ] **Server**: `server.js` exists and serves from correct directory
- [ ] **Start Script**: `"start": "node server.js"` in `package.json`
- [ ] **Express**: `express` is in `dependencies`
- [ ] **Node Version**: `engines.node` specified in `package.json`
- [ ] **Tailwind**: All custom colors defined in `tailwind.config.js`
- [ ] **CSS Syntax**: No Tailwind v4 syntax if using v3
- [ ] **Lock File**: `package-lock.json` regenerated with correct Node version
- [ ] **Railway Config**: `railway.json` uses `npm install` (not `npm ci`)
- [ ] **Local Build**: `npm run build` succeeds locally
- [ ] **Local Server**: `npm start` works and serves the app

### Before Each Deployment

- [ ] Build succeeds locally: `npm run build`
- [ ] Server starts locally: `npm start`
- [ ] No console errors in browser
- [ ] All routes work (including direct URL access)
- [ ] Assets load correctly (images, CSS, JS)

---

## Common Error Patterns & Solutions

### Error Pattern 1: "Cannot find module"
**Causes:**
- Wrong import path
- Missing dependency
- Platform-specific module not installed

**Solutions:**
- Use relative paths for assets
- Check `dependencies` vs `devDependencies`
- Use `npm install` instead of `npm ci`
- Add `.npmrc` with `include=optional`

### Error Pattern 2: "Class does not exist"
**Causes:**
- Tailwind config missing color definitions
- Using v4 syntax with v3
- CSS variables not mapped

**Solutions:**
- Define all colors in `tailwind.config.js`
- Use consistent Tailwind version
- Map CSS variables to Tailwind colors

### Error Pattern 3: "Build folder not found"
**Causes:**
- `outDir` mismatch between vite.config.ts and server.js
- Build didn't run
- Wrong directory name

**Solutions:**
- Verify `outDir: 'build'` matches server.js
- Ensure build runs before start
- Check file structure after build

### Error Pattern 4: "Optional dependency not found"
**Causes:**
- `npm ci` doesn't install optional deps reliably
- Native modules are platform-specific

**Solutions:**
- Use `npm install` instead of `npm ci`
- Add `.npmrc` with `include=optional`
- Avoid native module dependencies when possible

---

## Top 10 Lessons Summary

1. **Never use tool-specific import protocols** - Always use standard relative paths
2. **Use `npm install` for Railway** - Better optional dependency handling than `npm ci`
3. **Avoid native module dependencies** - They're the #1 source of deployment failures
4. **Match build output directories** - `outDir` must match server static directory
5. **Define all Tailwind colors** - Custom colors must be in `tailwind.config.js`
6. **Use consistent Tailwind versions** - Don't mix v3 and v4 syntax
7. **Move build tools to dependencies** - Railway skips `devDependencies`
8. **Use cross-platform scripts** - Node.js scripts, not shell commands
9. **Test builds locally first** - Always verify `npm run build` works
10. **Specify Node version** - Use `engines` field in `package.json`

---

## Quick Reference: File Checklist

### Required Files for Railway Deployment

```
✅ package.json          - With engines.node, build/start scripts
✅ vite.config.ts        - With correct outDir
✅ server.js             - Express server serving from outDir
✅ tailwind.config.js    - With all color definitions
✅ railway.json          - With npm install command
✅ nixpacks.toml         - Fallback config
✅ .npmrc                - With include=optional
✅ .gitignore            - Excludes node_modules, build/
```

### File Relationships

```
vite.config.ts (outDir: 'build')
    ↓
server.js (serves from 'build')
    ↓
package.json (start: "node server.js")
    ↓
railway.json (startCommand: "npm start")
```

---

## Final Recommendations

1. **Start Simple**: Use standard tools without native dependencies
2. **Test Locally**: Always test builds before deploying
3. **Version Consistency**: Keep all related tools on compatible versions
4. **Documentation**: Keep deployment guides updated
5. **Error Logs**: Read Railway logs carefully - they show the exact issue
6. **Incremental Changes**: Fix one issue at a time, test, then move on
7. **Lock Files**: Regenerate after major dependency changes
8. **Platform Awareness**: Consider Windows vs Linux differences

---

**Last Updated**: After resolving 10+ deployment errors
**Status**: All issues resolved, build successful ✅

