Set-Location 'F:\projects\bilacert\apps\admin'
Write-Output '--- GH AUTH STATUS (admin) ---'
try { gh auth status } catch { Write-Output 'gh not available or not authenticated' }
Write-Output '--- VERCEL WHOAMI (admin) ---'
try { vercel whoami } catch { Write-Output 'vercel not available or not authenticated' }
Write-Output '--- VERCEL LS (admin) ---'
try { vercel ls } catch { Write-Output 'vercel ls failed (ensure CLI is installed and you are authenticated)' }

Write-Output 'Sleeping 3s before client check...'
Start-Sleep -Seconds 3

Set-Location '..\client'
Write-Output '--- VERCEL LS (client) ---'
try { vercel ls } catch { Write-Output 'vercel ls failed (ensure CLI is installed and you are authenticated)' }

Write-Output 'Done.'
