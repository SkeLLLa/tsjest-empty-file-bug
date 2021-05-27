import {sleep} from './lib/sleep'
export default async () => {
  await sleep(2000)
  console.log('Global setup call')
}
