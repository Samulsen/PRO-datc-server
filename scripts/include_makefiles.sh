#!/bin/bash

# Define the directory containing the makefiles
MAKEFILES_DIR="makefiles"
MAIN_MAKEFILE="makefile"

# Find all makefiles with .mk extension in the specified directory and its subdirectories
MAKEFILES=$(find "$MAKEFILES_DIR" -type f -name "*.mk")

# Create a new main Makefile with the include statements
{
    echo "# Main Makefile"
    echo "# This file will never contain anything but include statements."
    echo "# Therefore, do not write anything else to it."
    echo ""

    # Write the include statements for each found makefile
    for FILE in $MAKEFILES; do
        echo "include $FILE"
    done
} > "$MAIN_MAKEFILE"
