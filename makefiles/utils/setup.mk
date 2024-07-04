include_makefiles:
	$(call exec_script,include_makefiles.sh)

set-scripts-executable:
	find scripts -type f -exec chmod +x {} \;

test:
	echo "myTest"

.PHONY: include_makefiles
