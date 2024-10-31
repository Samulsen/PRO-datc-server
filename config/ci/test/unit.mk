p=test-unit-

unitTestRootBrowser = config/tests/unit/browser

tsConfigForJestBrowserEnvironment = $(unitTestRootBrowser)/tsconfig.json

jestConfigForBrowserEnvironment = $(unitTestRootBrowser)/jest/config.ts

jestConfiguredForBrowser = npx ts-node --project $(tsConfigForJestBrowserEnvironment) node_modules/.bin/jest --config $(jestConfigForBrowserEnvironment)

$(p)app-frontend-ui:
	$(jestConfiguredForBrowser) apps/frontend/ui/src/

$(p)app-frontend-admin:
	$(jestConfiguredForBrowser) apps/frontend/admin/src/

$(p)lib-components:
	$(jestConfiguredForBrowser) libs/components/src/

$(p)lib-theme:
	$(jestConfiguredForBrowser) libs/theme/src/
