p=dev-
run=npm run

${p}admin:
	$(run) dev:admin

${p}ui:
	$(run) dev:ui

${p}storybook:
	$(run) dev:storybook
