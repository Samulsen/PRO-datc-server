p=ci-unit-tests-
utest_runner=npx ts-node config/ci/steps/unit-tests/runner.ts

$(p)app-frontend-ui:
	@$(utest_runner) frontendUI

$(p)app-frontend-admin:
	@$(utest_runner) frontendAdmin

$(p)lib-components:
	@$(utest_runner) libComponents

$(p)lib-theme:
	@$(utest_runner) libTheme
