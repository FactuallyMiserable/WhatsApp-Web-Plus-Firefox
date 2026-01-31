# WhatsApp-Web-Plus

## Features

|                    Feature                    | Availability |
|:---------------------------------------------:|:------------:|
|             Keep revoked messages             |      ✔       |
|             Keep edited messages              |      ✔       |
|              Indicate sender OS               |      ✔       |
|              @everyone, @admins               |      ✔       |
|      See blue ticks without sending them      |      ✔       |
| Forward message to unlimited number of groups |      ✔       |
|       Revoke messages whenever you want       |      ✔       |

## Installation for Firefox

### Temporary Installation (For Development)
1. Download the source code or clone the repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click "Load Temporary Add-on...".
4. Select the `manifest.json` file from the project directory.

### Permanent Installation
1. Pack the extension into a `.zip` or `.xpi` file.
2. Go to `about:addons`.
3. Click the gear icon and select "Install Add-on From File...".
4. Select your packed extension file.
*(Note: For permanent usage without signing, you may need Firefox Developer Edition or Nightly with `xpinstall.signatures.required` set to `false`)*
