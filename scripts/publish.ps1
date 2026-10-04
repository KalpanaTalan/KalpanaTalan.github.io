# Builds the site and publishes it to https://kalpanatalan.github.io
# (GitHub Pages: Settings -> Pages -> Source: Deploy from a branch -> gh-pages / root).
# Run from the project folder:  powershell -File scripts\publish.ps1
$ErrorActionPreference = "Stop"
$repo = "https://github.com/KalpanaTalan/KalpanaTalan.github.io.git"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed; nothing was published." }

# The finished pages live in out/. Publish them as a fresh gh-pages branch.
Set-Location (Join-Path $root "out")
New-Item -ItemType File -Force ".nojekyll" | Out-Null
git init -q
git checkout -q -b gh-pages
git config user.name (git -C $root config user.name)
git config user.email (git -C $root config user.email)
git add -A
git commit -q -m "Publish site"
git push -f $repo gh-pages
if ($LASTEXITCODE -ne 0) { throw "Push failed." }
Remove-Item -Recurse -Force ".git"
Write-Host "Published. Live in a minute or two at https://kalpanatalan.github.io"
