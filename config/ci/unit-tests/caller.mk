p=test-unit-
runner=npx ts-node config/ci/test/unit/runner.ts

# start the unit tests for the app: ui from the frontend domain
$(p)app-frontend-ui:
	@$(runner) frontendUI

# start the unit tests for the app: admin from the frontend domain
$(p)app-frontend-admin:
	@$(runner) frontendAdmin

# start the unit tests for the library: components from the frontend domain
$(p)lib-components:
	@$(runner) libComponents

# start the unit tests for the library: theme from the frontend domain
$(p)lib-theme:
	@$(runner) libTheme
