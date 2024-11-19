p=ci-combined-

full_runner_root=npx ts-node config/ci/runner/

$(p)full:
	@$(full_runner_root)full.ts

$(p)app-frontend-ui:
	@$(full_runner_root)target.ts frontendUI

$(p)app-frontend-admin:
	@$(full_runner_root)target.ts frontendAdmin

$(p)lib-components:
	@$(full_runner_root)target.ts libComponents

$(p)lib-theme:
	@$(full_runner_root)target.ts libTheme
