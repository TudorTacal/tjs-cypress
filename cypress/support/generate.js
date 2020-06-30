import {build, fake} from 'test-data-bot'

export const buildUser = build('User').fields({
  username: fake(f => f.internet.userName()),
  passwords: fake(f => f.internet.password()),
})
