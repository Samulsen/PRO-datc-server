include ./env/dev.mk
include ./config/ci/lint/caller.mk
include ./config/ci/compile/caller.mk
include ./config/ci/unit-tests/caller.mk


help:
	@echo "Available targets:"
	@make -pRrq -f $(MAKEFILE_LIST) : 2>/dev/null | awk -v RS= -F: '/^# Files/,/^# Finished Make data base/ { if ($$1 !~ "^[#.]") print $$1 }' | sort | uniq

.PHONY: help
