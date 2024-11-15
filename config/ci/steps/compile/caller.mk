p=ci-ts-compile-
com_runner=npx ts-node config/ci/steps/compile/runner.ts

$(p)app-frontend-ui:
	@$(com_runner) frontendUI

$(p)app-frontend-admin:
	@$(com_runner) frontendAdmin

$(p)lib-components:
	@$(com_runner) libComponents

$(p)lib-theme:
	@$(com_runner) libTheme
