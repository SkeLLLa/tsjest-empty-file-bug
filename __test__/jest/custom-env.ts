import NodeEnvironment from 'jest-environment-node'

class CustomEnv extends NodeEnvironment {
  async setup() {
    await super.setup()
  }
}

export default CustomEnv
