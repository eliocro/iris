import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('irisAPI', {
  // add API methods here
})
