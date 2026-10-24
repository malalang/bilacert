# Repo-local driver: stage explicit paths, commit, push (bilacert, owner malalang).
# Usage:
#   .\run-commit.ps1 -Files <repo-relative path(s)...> [-Message "<commit message>"]
# Example:
#   .\run-commit.ps1 -Files apps\admin\app\blogs\BlogForm.tsx -Message "fix(blogs): ..."
param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Files,
  [string]$Message = 'chore: update staged change'
)

# Resolve the repo root from where this script lives — no hard-coded drive letters
# (the workspace root moved off F:\projects; this runs wherever the checkout sits).
Set-Location $PSScriptRoot

if ($Files -contains '.') {
  Write-Output 'Refusing: never git add . — other sessions share this tree. Pass the explicit files this change touches.'
  exit 1
}

foreach ($f in $Files) {
  if (-not (Test-Path $f)) {
    Write-Output "Refusing: path does not exist in the repo at HEAD: $f"
    Write-Output 'Hint: apps/admin route segments were flattened — the admin/blogs wrapper segment is gone;'
    Write-Output 'the real location now is apps\admin\app\blogs\'
    exit 1
  }
}

git add -- @Files

# Show the staged set before committing — a wrong-path stage fails here, loudly.
git status --short

git commit -m $Message
if ($LASTEXITCODE -ne 0) { Write-Output 'Commit failed — nothing was pushed.'; exit 1 }

git push -u origin HEAD
