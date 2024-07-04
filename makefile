# Main Makefile
# This file will never contain anything but include statements.
# Therefore, do not write anything else to it.

include makefiles/prod.mk
include makefiles/env/database.mk
include makefiles/env/docker.mk
include makefiles/dev.mk
include makefiles/utils/make.mk
include makefiles/utils/wrapper.mk
include makefiles/utils/color.mk
