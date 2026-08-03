export interface Plugin {
  id: string
  name: string
  version: string
  description: string
  enabled: boolean
  author: string
}

export interface Theme {
  id: string
  name: string
  author: string
  enabled: boolean
  filePath: string
}

export interface BDSettings {
  developerMode: boolean
  debugLogs: boolean
  selectedTheme: string | null
}
