Set-Location 'F:\projects\bilacert'

# Stage the updated BlogForm
git add apps\admin\app\admin\blogs\BlogForm.tsx

# Commit with co-author trailer
git commit -m "fix(blogs): switch to tab containing first invalid field and focus it" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

# Push
git push -u origin HEAD
