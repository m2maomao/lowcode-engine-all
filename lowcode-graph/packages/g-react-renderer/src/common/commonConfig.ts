// person info
const PERSON_STATE_GREEN_ICON = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSI3LjUiIGZpbGw9IiM3Q0MwMjciIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
const PERSON_STATE_RED_ICON = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSI3LjUiIGZpbGw9IiNGRjVEMzkiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
const PERSON_STATE_YELLOW_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSI3LjUiIGZpbGw9IiNGRkNGMzkiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=';

// backup info
const BACKUP_STATE_2_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIuOCIgeT0iLjgiIHdpZHRoPSIzMSIgaGVpZ2h0PSI1IiByeD0iMiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVNlbWlib2xkLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjUwMCIgZmlsbD0iIzA5N0RGMiI+PHRzcGFuIHg9IjYiIHk9IjEyIj5SZWFkeTwvdHNwYW4+PC90ZXh0PjxwYXRoIGQ9Ik03LjUgMTVoMjZhMy41IDMuNSAwIDAxMCA3aC0yNmEzLjUgMy41IDAgMDEwLTd6IiBmaWxsPSIjMDk3REYyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4yIDE1LjIpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cmVjdCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS4yIiB4PSIxLjQiIHk9IjEuNCIgd2lkdGg9IjI5LjgiIGhlaWdodD0iMy44IiByeD0iMS45Ii8+PHJlY3QgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIgeD0iMTAuODQ5IiB5PSIxIiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiByeD0iLjUiLz48cGF0aCBkPSJNMTIuMjc1IDFoMThhLjUuNSAwIDAxLjUuNXY0YS41LjUgMCAwMS0uNS41aC0xOGEuNS41IDAgMDEtLjUtLjV2LTRhLjUuNSAwIDAxLjUtLjV6IiBmaWxsPSIjRkZGIiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvZz48L3N2Zz4=';
const BACKUP_STATE_1_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIuOCIgeT0iLjgiIHdpZHRoPSIzMSIgaGVpZ2h0PSI1IiByeD0iMiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVNlbWlib2xkLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjUwMCIgZmlsbD0iIzA5N0RGMiI+PHRzcGFuIHg9IjYiIHk9IjEyIj5SZWFkeTwvdHNwYW4+PC90ZXh0PjxwYXRoIGQ9Ik03LjUgMTVoMjZhMy41IDMuNSAwIDAxMCA3aC0yNmEzLjUgMy41IDAgMDEwLTd6IiBmaWxsPSIjMDk3REYyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4yIDE1LjIpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cmVjdCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS4yIiB4PSIxLjQiIHk9IjEuNCIgd2lkdGg9IjI5LjgiIGhlaWdodD0iMy44IiByeD0iMS45Ii8+PHJlY3QgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIgeD0iMTAuODQ5IiB5PSIxIiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiByeD0iLjUiLz48cGF0aCBkPSJNMjEuMzEgMWg4Ljk2NWEuNS41IDAgMDEuNS41djRhLjUuNSAwIDAxLS41LjVoLTguOTY2YS41LjUgMCAwMS0uNS0uNXYtNGEuNS41IDAgMDEuNS0uNXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PC9nPjwvc3ZnPg==';
const BACKUP_STATE_0_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIuOCIgeT0iLjgiIHdpZHRoPSIzMSIgaGVpZ2h0PSI1IiByeD0iMiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVNlbWlib2xkLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9IjUwMCIgZmlsbD0iIzA5N0RGMiI+PHRzcGFuIHg9IjYiIHk9IjEyIj5SZWFkeTwvdHNwYW4+PC90ZXh0PjxwYXRoIGQ9Ik03LjUgMTVoMjZhMy41IDMuNSAwIDAxMCA3aC0yNmEzLjUgMy41IDAgMDEwLTd6IiBmaWxsPSIjMDk3REYyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4yIDE1LjIpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cmVjdCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS4yIiB4PSIxLjQiIHk9IjEuNCIgd2lkdGg9IjI5LjgiIGhlaWdodD0iMy44IiByeD0iMS45Ii8+PHJlY3QgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIgeD0iMTAuODQ5IiB5PSIxIiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiByeD0iLjUiLz48cmVjdCBmaWxsPSIjRkZGIiBtYXNrPSJ1cmwoI2IpIiB4PSIyMC44MDkiIHk9IjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHJ4PSIuNSIvPjwvZz48L2c+PC9zdmc+';

/**
 * progress info
 */
// 未开始
const PROGRESS_STATE_0_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjOUZBQkI4IiBkPSJNMCAwaDY4djIwSDB6Ii8+PHBhdGggZD0iTTE0IDMuNzVhNiA2IDAgMTEwIDEyIDYgNiAwIDAxMC0xMnptLS44NjIgMi41NzFhLjQyMy40MjMgMCAwMC0uNDI0LjQyNHY2LjAxYS40MjQuNDI0IDAgMDAuNTE3LjQxMy40Mi40MiAwIDAwLjIyMS0uMTE2bDIuOTk2LTIuOTk5YS40MjguNDI4IDAgMDAwLS42MDJsLTIuOTk2LTIuOTk5YS40Mi40MiAwIDAwLS4xMi0uMDgzLjQyMS40MjEgMCAwMC0uMTk0LS4wNDh6IiBmaWxsPSIjRkZGIi8+PHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRkYiPjx0c3BhbiB4PSIyNCIgeT0iMTQiPuacquW8gOWnizwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9IiNCQkIiIGQ9Ik0wIDIwbDQuOTkzIDcuMjE3VjIwLjAyeiIvPjwvZz48L3N2Zz4=';
// 正常
const PROGRESS_STATE_1_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJhdXRvIiBpZD0iYiI+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUdyYXBoaWMiIHZhbHVlcz0iMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMS4wMDAwMDAgMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik02Ljc0Ni4wMDJjLjg4My4wNSAxLjU1Ljk1IDEuNTUgMi4xMjggMCAuOTUyLS4xMTMgMS43NzMtLjMwMiAyLjQ2Mi0uMDIzLjA4Mi0uMDQ1LjE2LS4wNjguMjMybDEuMDAyLS4wMDJhMTExLjg5IDExMS44OSAwIDAwMS41MjItLjAwOWMxLjEzMi0uMDI0IDEuNjgzLjUzIDEuNTIzIDEuNjgtLjAzMy4yMzItLjIwOSAxLjIzOC0uNDg1IDIuNzc1bC0uMzkxIDIuMTc2LS4wMjcuMTQ4LS4wMDcuMDM4YS40MzYuNDM2IDAgMDEtLjQyNi4zN0gyLjkxNGwtLjAzNC0uMDAzSC40OTNjLS4yNDIgMC0uNDQzLS4xNTMtLjQ4NS0uMzU2TDAgMTEuNTYzdi02LjE0YzAtLjI0MS4yMi0uNDM2LjQ5My0uNDM2aDIuNjQybC4wMzQtLjAxM2MuMjkyLS4xMTguNTctLjI3Mi44MjQtLjQ1OC43MjktLjUzNCAxLjE1Ni0xLjI2NSAxLjE1Ni0yLjI1NSAwLTEuNDA2LjY1NC0yLjMxMyAxLjU5Ny0yLjI1OXpNMi40ODMgMTEuMTI3di01LjI3SC45ODZ2NS4yN2gxLjQ5N3oiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzYxQTVFNyIgZD0iTTAgMGg1NnYyMEgweiIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGIj48dHNwYW4geD0iMjQiIHk9IjE0Ij7mraPluLg8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjQkJCIiBkPSJNMCAyMGw0Ljk5MyA3LjIxN1YyMC4wMnoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDMpIj48bWFzayBpZD0iYyIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWx0ZXI9InVybCgjYikiPjxnIG1hc2s9InVybCgjYykiPjxwYXRoIGQ9Ik0tMS0xaDE0djE0SC0xeiIgZmlsbD0iI0E1QUZCQyIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=';
// 落后
const PROGRESS_STATE_2_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRDUzODM4IiBkPSJNMCAwaDU2djIwSDB6Ii8+PHBhdGggZD0iTTE0IDRhNiA2IDAgMTEwIDEyIDYgNiAwIDAxMC0xMnptLS45MTMgNGMtMS4wNy4wMDYtMi4wMS45NTEtMi4zMjMgMi4zMzJsLS4wNTIuMjY2aC0uMDc3Yy0uMjg4LjAwMS0uNTM4LjI2OC0uNjA2LjY0NmwtLjAyNi4xNWEuMjI5LjIyOSAwIDAwLjAyNi4xNWMuMDI2LjA0My4wNjUuMDY4LjEwNy4wNjdoLjE4di4yMDFjLjExNC4yNTUuNDk3LjQxNS41NzUuNDQ1bC0uMDQ2LjcxOGguOTc5di0uMDIyYy0uMDAzLS4xOTgtLjA4Ny0uMzc4LS4yMTgtLjQ2OGgtLjAxM2MuMDE4LS4xMTkuMDk2LS4yMDMuMTg2LS4yMDNoMi4wMjRhNC4wNzcgNC4wNzcgMCAwMDEuMTA1LS4xNzlsLjIzMS44OTdoLjk3MXYtLjAyMmMuMDA0LS4yMDctLjA4Mi0uNC0uMjItLjQ5M2wtLjAxOC0uMDEyLS4xOS0uNjkuMTMzLS4wODdjLjM5Ny0uMjc2Ljc4NC0uNTggMS4xNTctLjkxMmwuMDgxLS4wNzFjLjE5OC0uMTYyLjQwNS0uMzA1LjYxOC0uNDI3LjIxOC0uMTM0LjM1LS40NC4zMjYtLjc2My0uMDM0LS4zOTMtLjI4My0uNjg5LS41NzYtLjY4NWgtLjA3N2MtLjUwOSAwLTEuMTQ4LjYxMi0xLjU2NSAxLjI1NmEuNS41IDAgMDAtLjQ0LS4xNTNDMTQuOTE3IDguNzc2IDE0LjA0OCA4LjAyOCAxMy4wODggOHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGIj48dHNwYW4geD0iMjQiIHk9IjE0Ij7okL3lkI48L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjQkJCIiBkPSJNMCAyMGw0Ljk5MyA3LjIxN1YyMC4wMnoiLz48L2c+PC9zdmc+';
// 风险
const PROGRESS_STATE_3_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRjQ2NDIzIiBkPSJNMCAwaDU2djIwSDB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTQuNDg3IDYuMDE3IDEwLjE4MyA2IDggMTEuOTc5bDIuOTY4LS4xMTRMOS43NTYgMTYgMTYgOS4yMDZsLTMuNTE0LjM1MyAyLTMuNTQyeiIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGIj48dHNwYW4geD0iMjAiIHk9IjE0Ij7po47pmak8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjQkJCIiBkPSJtMCAyMCA0Ljk5MyA3LjIxN1YyMC4wMnoiLz48L2c+PC9zdmc+';
// 暂停
const PROGRESS_STATE_4_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik02IDBhNiA2IDAgMTEwIDEyQTYgNiAwIDAxNiAwek00LjcxNCAzLjQyOWwtLjA3NS4wMDdhLjQ0MS40NDEgMCAwMC0uMzUzLjQzMXY0LjI2NmMwIC4yNDMuMTkyLjQzOC40MjguNDM4bC4wNzUtLjAwN2EuNDQxLjQ0MSAwIDAwLjM1NC0uNDMxVjMuODY3YS40MzMuNDMzIDAgMDAtLjQyOS0uNDM4em0yLjU3MiAwbC0uMDc1LjAwN2EuNDQxLjQ0MSAwIDAwLS4zNTQuNDMxdjQuMjY2YzAgLjI0My4xOTIuNDM4LjQyOS40MzhsLjA3NS0uMDA3YS40NDEuNDQxIDAgMDAuMzUzLS40MzFWMy44NjdhLjQzMy40MzMgMCAwMC0uNDI4LS40Mzh6IiBpZD0iYSIvPjxwYXRoIGQ9Ik02IDBhNiA2IDAgMTEwIDEyQTYgNiAwIDAxNiAwek00LjcxNCAzLjQyOWwtLjA3NS4wMDdhLjQ0MS40NDEgMCAwMC0uMzUzLjQzMXY0LjI2NmMwIC4yNDMuMTkyLjQzOC40MjguNDM4bC4wNzUtLjAwN2EuNDQxLjQ0MSAwIDAwLjM1NC0uNDMxVjMuODY3YS40MzMuNDMzIDAgMDAtLjQyOS0uNDM4em0yLjU3MiAwbC0uMDc1LjAwN2EuNDQxLjQ0MSAwIDAwLS4zNTQuNDMxdjQuMjY2YzAgLjI0My4xOTIuNDM4LjQyOS40MzhsLjA3NS0uMDA3YS40NDEuNDQxIDAgMDAuMzUzLS40MzFWMy44NjdhLjQzMy40MzMgMCAwMC0uNDI4LS40Mzh6IiBpZD0iYiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM5RkFCQjgiIGQ9Ik0wIDBoNTZ2MjBIMHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDQpIiBmaWxsPSIjRkZGIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PHVzZSB4bGluazpocmVmPSIjYiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRiI+PHRzcGFuIHg9IjI0IiB5PSIxNCI+5pqC5YGcPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iI0JCQiIgZD0iTTAgMjBsNC45OTMgNy4yMTdWMjAuMDJ6Ii8+PC9nPjwvc3ZnPg==';
// 完结
const PROGRESS_STATE_5_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik02IDBhNiA2IDAgMTEwIDEyQTYgNiAwIDAxNiAwem0zLjMzNCAzLjYyOGEuNDI4LjQyOCAwIDAwLS42MDcgMGwtMy45NCAzLjk0TDMuMjczIDYuMDVhLjQzLjQzIDAgMDAtLjYwNi4wMDEuNDI3LjQyNyAwIDAwMCAuNjA1bDEuODIgMS44MmEuNDMxLjQzMSAwIDAwLjYwNSAwbDQuMjQyLTQuMjQzYS40MjguNDI4IDAgMDAwLS42MDZ6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM3Q0MwMjciIGQ9Ik0wIDBoNTZ2MjBIMHoiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDQpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PGcgbWFzaz0idXJsKCNiKSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTS0uODU3LS44NTdoMTMuNzE0djEzLjcxNEgtLjg1N3oiLz48L2c+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGIj48dHNwYW4geD0iMjQiIHk9IjE0Ij7lroznu5M8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjQkJCIiBkPSJNMCAyMGw0Ljk5MyA3LjIxN1YyMC4wMnoiLz48L2c+PC9zdmc+';


export const NODE_COLOR = {
    default: {
        titleColor: '#000000',
        borderColor: '#FFF4E7',
        backgroundColor: '#FFFFFF',
    },
    red: {
        titleColor: '#FFFFFF',
        borderColor: '#E00000',
        backgroundColor: '#FFF7F7',
    },
    orange: {
        titleColor: '#FFFFFF',
        borderColor: '#FF7C00',
        backgroundColor: '#FFF8F4',
    },
    green: {
        titleColor: '#FFFFFF',
        borderColor: '#00B16B',
        backgroundColor: '#F7FFFA',
    },
    ching: {
        titleColor: '#FFFFFF',
        borderColor: '#2CDCFF',
        backgroundColor: '#F6FEFF',
    },
    purple: {
        titleColor: '#FFFFFF',
        borderColor: '#651FE1',
        backgroundColor: '#FCF8FF',
    },
    pink: {
        titleColor: '#FFFFFF',
        borderColor: '#E844F4',
        backgroundColor: '#FFF9FD',
    },
    blue: {
        titleColor: '#FFFFFF',
        borderColor: '#1577F3',
        backgroundColor: '#F7F9FF',
    },
    yellow: {
        titleColor: '#FFFFFF',
        borderColor: '#FCC406',
        backgroundColor: '#FFFCEE',
    },
    grassGreen: {
        titleColor: '#FFFFFF',
        borderColor: '#FFF4E7',
        backgroundColor: '#F1FFF2',
    },
    brown: {
        titleColor: '#FFFFFF',
        borderColor: '#B06523',
        backgroundColor: '#FFFAF7',
    },
    black: {
        titleColor: '#FFFFFF',
        borderColor: '#474747',
        backgroundColor: '#F9F9F9',
    },
};

export const PROGRESS_STATE_INFO = {
    0: {
        width: 68,
        height: 28,
        img: PROGRESS_STATE_0_ICON,
    },
    1: {
        width: 56,
        height: 28,
        img: PROGRESS_STATE_1_ICON,
    },
    2: {
        width: 56,
        height: 28,
        img: PROGRESS_STATE_2_ICON,
    },
    3: {
        width: 56,
        height: 28,
        img: PROGRESS_STATE_3_ICON,
    },
    4: {
        width: 56,
        height: 28,
        img: PROGRESS_STATE_4_ICON,
    },
    5: {
        width: 56,
        height: 28,
        img: PROGRESS_STATE_5_ICON,
    },
}

export const PERSON_STATE_INFO = {
    health: {
        green: {
            width: 15,
            height: 15,
            img: PERSON_STATE_GREEN_ICON,
        },
        red: {
            width: 15,
            height: 15,
            img: PERSON_STATE_RED_ICON,
        },
        yellow: {
            width: 15,
            height: 15,
            img: PERSON_STATE_YELLOW_ICON,
        },
    },
    backup: {
        // full
        0: {
            offsetY: -8,
            width: 41,
            height: 22,
            img: BACKUP_STATE_0_ICON,
        },
        // ready
        1: {
            offsetY: -8,
            width: 41,
            height: 22,
            img: BACKUP_STATE_1_ICON,
        },
        // not yet
        2: {
            offsetY: -8,
            width: 41,
            height: 22,
            img: BACKUP_STATE_2_ICON,
        },
    }
}

export const KEY_ITEM = {
    fontFamily: 'iconfont',
    text: '\ue754',
    fontSize: '16px',
};
