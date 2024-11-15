p=ci-eslint-
lint_runner=npx ts-node config/ci/steps/lint/runner.ts

$(p)app-frontend-ui:
	@$(lint_runner) frontendUI

$(p)app-frontend-admin:
	@$(lint_runner) frontendAdmin

$(p)lib-components:
	@$(lint_runner) libComponents

$(p)lib-theme:
	@$(lint_runner) libTheme
