jestConfiguredForBrowser=npx ts-node --project config/tests/unit/browser/tsconfig.json node_modules/.bin/jest --config config/tests/unit/browser/jest/config.ts

test-app-frontend-ui:
	$(jestConfiguredForBrowser) apps/frontend/ui/src/

test-app-frontend-admin:
	$(jestConfiguredForBrowser) apps/frontend/admin/src/

test-lib-components:
	$(jestConfiguredForBrowser) libs/components/src/

test-lib-theme:
	$(jestConfiguredForBrowser) libs/theme/src/
