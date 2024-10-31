p=test-unit-
runner=npx ts-node config/ci/test/unit/runner.ts

$(p)app-frontend-ui:
	$(runner) apps/frontend/ui/src/

$(p)app-frontend-admin:
	$(runner) apps/frontend/admin/src/

$(p)lib-components:
	$(runner) libs/components/src/

$(p)lib-theme:
	$(runner) libs/theme/src/
