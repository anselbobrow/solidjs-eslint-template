## SolidJS + ESLint project template

This template comes with all the Typescript, Vite, and ESLint ~~magic~~ *setup*
configured, providing all you need to harness LSP support for SolidJS specific
ESLint rules.

### Features
This template is based on the official "bare" template from the [SolidJS templates repo](https://github.com/solidjs/templates). It adds support for eslint-plugin-solid and describes the process of configuring LSPs for SolidJS in Neovim.
- `eslint-plugin-solid` support
- Add your own typescript rules easily in `eslint.config.ts`
- Basic CSS reset + CSS variable configuration example in `index.css`
- Basic demonstration of CSS modules (see `App.tsx` and `App.module.css`)

### Setup & Usage
1. Checkout the template and install dependencies.
	```sh
	git clone 'https://github.com/anselbobrow/solidjs-eslint-template.git' your-project-name
	cd your-project-name && pnpm install
	```
2. Ensure you have `eslint` and `ts_ls` language servers installed for maximum
	helpfulness (`emmet_language_server` and `cssls` may also be helpful
	although not required). This is a snippet of an example setup in Neovim using
	`nvim-lspconfig` (`:h lspconfig`).

	```lua
	local servers = {
		ts_ls = {
			init_options = {
				hostInfo = 'neovim',
				preferences = {
					-- This rule helps ensure auto-imports come from the correct source
					-- https://github.com/typescript-language-server/typescript-language-server/blob/master/docs/configuration.md
					autoImportSpecifierExcludeRegexes = {
						'solid-js/types',
					},
				},
			},
		},
		eslint = {},
		cssls = {},
		emmet_language_server = {
			filetypes = { 'html', 'typescriptreact', 'javascriptreact' },
		},
	}
	for name, cfg in pairs(servers) do
		vim.lsp.config(name, cfg)
		vim.lsp.enable(name)
	end
	```
3. Start the dev server. Or build your app and deploy the `/dist` folder.
```sh
pnpm dev
pnpm build
```
