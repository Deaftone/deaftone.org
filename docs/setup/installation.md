---
sidebar_position: 1
---

# Installation

To setup and install Deaftone you need to download the [binary release](https://github.com/Deaftone/Deaftone/releases/latest) for your platform or clone and build the repo. Once your binary is downloaded, place a `settings.toml` configuration file in the same folder with the following content:

```
log_level="deaftone=info,tower_http=info"
db_path="./deaftone.sqlite"
media_path="H:\\aa"
```

The property media_path is the location of your media and db_path is where the database is saved. The log_level property is for changing the log level of the application.