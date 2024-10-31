p=test-unit-
runner=npx ts-node config/ci/test/unit/runner.ts

$(p)app-frontend-ui:
	@$(runner) frontendUI

$(p)app-frontend-admin:
	@$(runner) frontendAdmin

$(p)lib-components:
	@$(runner) libComponents

$(p)lib-theme:
	@$(runner) libTheme
