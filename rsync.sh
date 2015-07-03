rsync -arvz --files-from='files_sync.txt' . fichamtch@fichamtch.org:/home/fichamtch/fichamtch.org/
rsync -ravz ./usuarios/ -e ssh fichamtch@fichamtch.org:/home/fichamtch/
