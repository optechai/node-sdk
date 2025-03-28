# Changelog

## 0.11.1 (2025-03-28)

Full Changelog: [v0.11.0...v0.11.1](https://github.com/optechai/node-sdk/compare/v0.11.0...v0.11.1)

### Bug Fixes

* avoid type error in certain environments ([#172](https://github.com/optechai/node-sdk/issues/172)) ([4531f6f](https://github.com/optechai/node-sdk/commit/4531f6fb26bb73697b786df4f3598b34671c005f))
* **exports:** ensure resource imports don't require /index ([#168](https://github.com/optechai/node-sdk/issues/168)) ([2ff56f7](https://github.com/optechai/node-sdk/commit/2ff56f7f21c2b25d87aa56d78912c159dd2789d3))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#173](https://github.com/optechai/node-sdk/issues/173)) ([f6b7617](https://github.com/optechai/node-sdk/commit/f6b76174d6af0626865ec727dcff701cc2973901))


### Chores

* **exports:** cleaner resource index imports ([#170](https://github.com/optechai/node-sdk/issues/170)) ([0caeba2](https://github.com/optechai/node-sdk/commit/0caeba23fd3863bbcd7231a80f924cf2d1f60182))
* **exports:** stop using path fallbacks ([#171](https://github.com/optechai/node-sdk/issues/171)) ([4f82b30](https://github.com/optechai/node-sdk/commit/4f82b30de97adf204441916e7383352e7097e89a))

## 0.11.0 (2025-03-11)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/optechai/node-sdk/compare/v0.10.0...v0.11.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#163](https://github.com/optechai/node-sdk/issues/163)) ([51a5407](https://github.com/optechai/node-sdk/commit/51a5407f36aea6fd0195cf93191b19596cfa6cd2))
* **api:** api update ([#160](https://github.com/optechai/node-sdk/issues/160)) ([fe2e559](https://github.com/optechai/node-sdk/commit/fe2e5591f18fdfa0ded655ee906266fc457c65b8))
* **api:** api update ([#162](https://github.com/optechai/node-sdk/issues/162)) ([e3d8dfb](https://github.com/optechai/node-sdk/commit/e3d8dfb7ab81ba8f2ea15b78313a6c3ff350909d))
* **client:** accept RFC6838 JSON content types ([#164](https://github.com/optechai/node-sdk/issues/164)) ([a4074cb](https://github.com/optechai/node-sdk/commit/a4074cb2241b701a4514d2592c221cdfaefe3b4e))
* feat: opt-7145 poll every second ([8d26f49](https://github.com/optechai/node-sdk/commit/8d26f492f08694506c68f9eed504ba4dc0f0bf88))

## 0.10.0 (2025-03-04)

Full Changelog: [v0.9.2...v0.10.0](https://github.com/optechai/node-sdk/compare/v0.9.2...v0.10.0)

### Features

* **api:** api update ([#155](https://github.com/optechai/node-sdk/issues/155)) ([8dfa34b](https://github.com/optechai/node-sdk/commit/8dfa34bf5bde64ea5ff93aa9053848ae357e9aa7))
* **api:** api update ([#157](https://github.com/optechai/node-sdk/issues/157)) ([1a99697](https://github.com/optechai/node-sdk/commit/1a99697aac37e75c479f7935f17a935dc58b4980))


### Chores

* **internal:** fix devcontainers setup ([#153](https://github.com/optechai/node-sdk/issues/153)) ([c0b34bb](https://github.com/optechai/node-sdk/commit/c0b34bb780a7438413fc0b0627fa28eacd3dfaa6))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#156](https://github.com/optechai/node-sdk/issues/156)) ([93920fa](https://github.com/optechai/node-sdk/commit/93920fa830b33f4d8e522accda6fc2ece62296ca))

## 0.9.2 (2025-02-14)

Full Changelog: [v0.9.1...v0.9.2](https://github.com/optechai/node-sdk/compare/v0.9.1...v0.9.2)

### Bug Fixes

* **client:** fix export map for index exports ([#150](https://github.com/optechai/node-sdk/issues/150)) ([b907b3c](https://github.com/optechai/node-sdk/commit/b907b3c5d45e9ecf89b4d6b4330f430b23130b49))

## 0.9.1 (2025-02-05)

Full Changelog: [v0.9.0...v0.9.1](https://github.com/optechai/node-sdk/compare/v0.9.0...v0.9.1)

### Features

* **api:** supply app link in conversation response ([#148](https://github.com/optechai/node-sdk/issues/148)) ([b69e96d](https://github.com/optechai/node-sdk/commit/b69e96d847b130418c4c8cd7826089f2e4ffccbe))
* **client:** send `X-Stainless-Timeout` header ([#146](https://github.com/optechai/node-sdk/issues/146)) ([d608779](https://github.com/optechai/node-sdk/commit/d608779a9476f22aec184e959c394c3071e9492d))


### Chores

* docs fix ([26b32f8](https://github.com/optechai/node-sdk/commit/26b32f8399cce4066b3d26424d1733c3b96eea8e))

## 0.9.0 (2025-01-30)

Full Changelog: [v0.8.1...v0.9.0](https://github.com/optechai/node-sdk/compare/v0.8.1...v0.9.0)

### Features

* **api:** api update ([#142](https://github.com/optechai/node-sdk/issues/142)) ([2c26d40](https://github.com/optechai/node-sdk/commit/2c26d409466e11c0921ae58066fdf603f269ed78))

## 0.8.1 (2025-01-29)

Full Changelog: [v0.8.0...v0.8.1](https://github.com/optechai/node-sdk/compare/v0.8.0...v0.8.1)

### Features

* chore: rework examples to include events ([8fd630f](https://github.com/optechai/node-sdk/commit/8fd630ffac661e6c9b3278460fb4d76b4b052d48))

## 0.8.0 (2025-01-29)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/optechai/node-sdk/compare/v0.7.0...v0.8.0)

### Features

* **api:** SDK now returns events with richer information on things like topic matching, and escalations. ([#138](https://github.com/optechai/node-sdk/issues/138)) ([7b994e3](https://github.com/optechai/node-sdk/commit/7b994e3b0f6d4a382246122d528bb88a6cfcfd9a))


### Chores

* **internal:** codegen related update ([#136](https://github.com/optechai/node-sdk/issues/136)) ([554c219](https://github.com/optechai/node-sdk/commit/554c219849d9b1c718c9c4148dd918c33c6e73b6))
* **internal:** codegen related update ([#137](https://github.com/optechai/node-sdk/issues/137)) ([ebbb7ea](https://github.com/optechai/node-sdk/commit/ebbb7eaffb055271ae5a3ccc0252016ae4f1b283))

## 0.7.0 (2025-01-14)

Full Changelog: [v0.6.3...v0.7.0](https://github.com/optechai/node-sdk/compare/v0.6.3...v0.7.0)

### Features

* **api:** Support for attachments in ticket messages ([#120](https://github.com/optechai/node-sdk/issues/120)) ([16500dd](https://github.com/optechai/node-sdk/commit/16500dd356f213a64749895a870ee17f7085e359))
* **api:** Supports conversation status in response ([#130](https://github.com/optechai/node-sdk/issues/130)) ([231084a](https://github.com/optechai/node-sdk/commit/231084a7d2d3ac077e5518d58bb836e878580c2c))

#### Conversation status

* `status` allows users to determine previously opaque aspects of response generation
  - `Unprocessed`: We have not done anything to the ticket.
  - `Processing`: The ticket is being processed. This includes cases where we are waiting for the customer to reply.
  - `Unhandled`: Not enough workflows matched this ticket, so we did nothing.
  - `Escalated`: We tried to respond to the ticket, but had to escalate it to a human.
  - `Responded`: We have responded to the ticket.
  - `Error`: A system error occurred while processing the ticket.

### Bug Fixes

* **client:** normalize method ([#124](https://github.com/optechai/node-sdk/issues/124)) ([5322c3a](https://github.com/optechai/node-sdk/commit/5322c3a9dff3fd9f738654595588a096a54d375d))


### Chores

* **internal:** codegen related update ([#116](https://github.com/optechai/node-sdk/issues/116)) ([743e222](https://github.com/optechai/node-sdk/commit/743e222028c225f85732862e73a29296de0b6790))
* **internal:** codegen related update ([#125](https://github.com/optechai/node-sdk/issues/125)) ([a4102dc](https://github.com/optechai/node-sdk/commit/a4102dcfd5cb9198ec107cae96fe0a39b730fdd2))
* **internal:** codegen related update ([#128](https://github.com/optechai/node-sdk/issues/128)) ([7f49512](https://github.com/optechai/node-sdk/commit/7f4951278344f7a7b614cf6a089c1ca9e4c1e11d))
* **internal:** codegen related update ([#129](https://github.com/optechai/node-sdk/issues/129)) ([4fab784](https://github.com/optechai/node-sdk/commit/4fab784307d3b38fa248a0ee0ef5b1a71f02dfb4))
* **internal:** fix some typos ([#121](https://github.com/optechai/node-sdk/issues/121)) ([da09487](https://github.com/optechai/node-sdk/commit/da094874f675024cb18bc0a6f1f0a32ddb909faf))
* **internal:** update isAbsoluteURL ([#119](https://github.com/optechai/node-sdk/issues/119)) ([d1020ed](https://github.com/optechai/node-sdk/commit/d1020ed87895b4b145fb389155e6bf80aec7fc69))
* **types:** nicer error class types + jsdocs ([#118](https://github.com/optechai/node-sdk/issues/118)) ([371255e](https://github.com/optechai/node-sdk/commit/371255e9bb0ac71b11f14c2c2a23a1b3753102f2))

## 0.6.3 (2024-12-11)

Full Changelog: [v0.6.2...v0.6.3](https://github.com/optechai/node-sdk/compare/v0.6.2...v0.6.3)

### Features

* **api:** api update ([#114](https://github.com/optechai/node-sdk/issues/114)) ([feb19dc](https://github.com/optechai/node-sdk/commit/feb19dc361072483bbdf0a7aa7470493bce136bd))


### Chores

* include initial message ([ff0a560](https://github.com/optechai/node-sdk/commit/ff0a560221469d121015435bb56c9d6a8f7eef82))
* **internal:** remove unnecessary getRequestClient function ([#115](https://github.com/optechai/node-sdk/issues/115)) ([58fe3ae](https://github.com/optechai/node-sdk/commit/58fe3ae26058bd94eca16ca8513fd06d6850bfe7))

## 0.6.2 (2024-12-09)

Full Changelog: [v0.6.1...v0.6.2](https://github.com/optechai/node-sdk/compare/v0.6.1...v0.6.2)

### Features

* **api:** api update ([#109](https://github.com/optechai/node-sdk/issues/109)) ([5f2835c](https://github.com/optechai/node-sdk/commit/5f2835c1fc9583190e913b7d9e91685d059e406b))

## 0.6.1 (2024-12-08)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/optechai/node-sdk/compare/v0.6.0...v0.6.1)

### Features

* **api:** add customer update endpoint ([#107](https://github.com/optechai/node-sdk/issues/107)) ([e7d6625](https://github.com/optechai/node-sdk/commit/e7d66251001a5dd4e175b9b08bf62ecd0b6bdd8d))


### Bug Fixes

* pass through timeout options on requests ([329f35a](https://github.com/optechai/node-sdk/commit/329f35a5a0dbcefdbf9a23e5343fa9685fb49d8a))

## 0.6.0 (2024-12-03)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/optechai/node-sdk/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([#103](https://github.com/optechai/node-sdk/issues/103)) ([8d13189](https://github.com/optechai/node-sdk/commit/8d13189d8e121cd012358ad6d91f24113d5ba12e))
* **internal:** make git install file structure match npm ([#101](https://github.com/optechai/node-sdk/issues/101)) ([3870c33](https://github.com/optechai/node-sdk/commit/3870c334741c6e805070d2c150d14d0351f69537))

## 0.5.0 (2024-11-22)

Full Changelog: [v0.4.1...v0.5.0](https://github.com/optechai/node-sdk/compare/v0.4.1...v0.5.0)

### Features

* **api:** api update ([#98](https://github.com/optechai/node-sdk/issues/98)) ([860fd1e](https://github.com/optechai/node-sdk/commit/860fd1ec25a9b85f856fe27ba2a704091c6412ab))

## 0.4.1 (2024-11-20)

Full Changelog: [v0.4.0...v0.4.1](https://github.com/optechai/node-sdk/compare/v0.4.0...v0.4.1)

### Chores

* **internal:** version bump ([#93](https://github.com/optechai/node-sdk/issues/93)) ([d1dd557](https://github.com/optechai/node-sdk/commit/d1dd55783a548cf6f41c7a2b9e197470406dbf1e))
* remove redundant word in comment ([#95](https://github.com/optechai/node-sdk/issues/95)) ([4e5f199](https://github.com/optechai/node-sdk/commit/4e5f19965cbb44b2e9d58048c1b74cd6ef45e50c))
* update logic for bot response bolling ([3a7ba21](https://github.com/optechai/node-sdk/commit/3a7ba213594537573238a2a450c0d790d991dffc))

## 0.4.0 (2024-11-19)

Full Changelog: [v0.3.2...v0.4.0](https://github.com/optechai/node-sdk/compare/v0.3.2...v0.4.0)

### Features

* **api:** api update ([#84](https://github.com/optechai/node-sdk/issues/84)) ([5bbd6f8](https://github.com/optechai/node-sdk/commit/5bbd6f8ef96296dd546a7b0a3c10350362018993))
* **api:** api update ([#86](https://github.com/optechai/node-sdk/issues/86)) ([40ab47e](https://github.com/optechai/node-sdk/commit/40ab47e3f6ebe7ddf6e8acc46a052386e07eb158))
* **api:** api update ([#88](https://github.com/optechai/node-sdk/issues/88)) ([1064286](https://github.com/optechai/node-sdk/commit/10642868394250a1cd542fbd448aa638896df5f7))
* **api:** api update ([#90](https://github.com/optechai/node-sdk/issues/90)) ([6951b44](https://github.com/optechai/node-sdk/commit/6951b443591763648a0db529075c8ec7882313f0))
* **api:** manual updates / ignore endpoints ([#89](https://github.com/optechai/node-sdk/issues/89)) ([a68b265](https://github.com/optechai/node-sdk/commit/a68b26515443db2c9522f5d6ad8e0c56ccfac5b0))

## 0.3.2 (2024-11-15)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/optechai/node-sdk/compare/v0.3.1...v0.3.2)

### Chores

* **internal:** version bump ([#80](https://github.com/optechai/node-sdk/issues/80)) ([769ddc7](https://github.com/optechai/node-sdk/commit/769ddc76f3ded51a5615e29ed44d8782f5246a8b))
* rebuild project due to codegen change ([#83](https://github.com/optechai/node-sdk/issues/83)) ([491f0d8](https://github.com/optechai/node-sdk/commit/491f0d82637f8ab76db9c8236b8f4ed2d099d0a6))
* tweak docs example ([302c7e0](https://github.com/optechai/node-sdk/commit/302c7e0a489055456e01adf22d163ed6059135e9))

## 0.3.1 (2024-11-14)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/optechai/node-sdk/compare/v0.3.0...v0.3.1)

### Features

* **api:** api update ([#75](https://github.com/optechai/node-sdk/issues/75)) ([108e553](https://github.com/optechai/node-sdk/commit/108e55335bea22bc946e43fd7661fd77cafa7d59))
* **api:** api update ([#78](https://github.com/optechai/node-sdk/issues/78)) ([6009b30](https://github.com/optechai/node-sdk/commit/6009b30741c6835942cc1886f5ca9aa53df2e7f0))
* **api:** api update ([#79](https://github.com/optechai/node-sdk/issues/79)) ([381205e](https://github.com/optechai/node-sdk/commit/381205e424f2ea33c6d13da2342d431153319e56))


### Bug Fixes

* add poll ([22f1f28](https://github.com/optechai/node-sdk/commit/22f1f287ba8383b5c129aa7029c36d8a46389499))

## 0.3.0 (2024-11-07)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/optechai/node-sdk/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([#70](https://github.com/optechai/node-sdk/issues/70)) ([c0a94ee](https://github.com/optechai/node-sdk/commit/c0a94ee18502b2e75ebf589751aebac8c320dfcd))
* **api:** fix spec, rename token import ([#72](https://github.com/optechai/node-sdk/issues/72)) ([05f7e25](https://github.com/optechai/node-sdk/commit/05f7e2530ec27260fd864d1de3c4e45e4337ffef))

## 0.2.0 (2024-11-07)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/optechai/node-sdk/compare/v0.1.0...v0.2.0)

### Features

* chore: re-add prettier formatting ([4329850](https://github.com/optechai/node-sdk/commit/4329850f92d35ef676d64c716b1a795756d07f81))
* chore: run format ([4a3a193](https://github.com/optechai/node-sdk/commit/4a3a193d1cf2cecfeab8945970cc95afcab8a9a2))


### Chores

* **internal:** version bump ([#66](https://github.com/optechai/node-sdk/issues/66)) ([ceeac75](https://github.com/optechai/node-sdk/commit/ceeac75db5f11ed8d763fd1a73e65a0d310b7313))
* little whoopsie ([6ad3de4](https://github.com/optechai/node-sdk/commit/6ad3de4610c7b5639c246fa7e7de3a78ea952089))
* re-add prettier formatting ([fdbaae6](https://github.com/optechai/node-sdk/commit/fdbaae608e3c80f0be78474f2dfba95f7fcb366d))
* run format ([82e0c78](https://github.com/optechai/node-sdk/commit/82e0c7871984c2c3d6812f50008df8866976427f))


### Documentation

* add example ([115fd30](https://github.com/optechai/node-sdk/commit/115fd30d7b09be6d0bd3836d480fe9ae35c568ba))

## 0.1.0 (2024-11-06)

Full Changelog: [v0.1.0-beta.4...v0.1.0](https://github.com/optechai/node-sdk/compare/v0.1.0-beta.4...v0.1.0)

### Features

* **api:** api update ([#61](https://github.com/optechai/node-sdk/issues/61)) ([73e1cbe](https://github.com/optechai/node-sdk/commit/73e1cbe93af2516a416685314ef04e0165d71a43))


### Bug Fixes

* **api:** manual updates ([#62](https://github.com/optechai/node-sdk/issues/62)) ([5e39228](https://github.com/optechai/node-sdk/commit/5e39228db2d8eda672d30975f1fc16e1a5578f13))


### Chores

* **internal:** version bump ([#59](https://github.com/optechai/node-sdk/issues/59)) ([a87f7a8](https://github.com/optechai/node-sdk/commit/a87f7a84d223ad786af7bc57bd8c977e397ba646))

## 0.1.0-beta.4 (2024-11-05)

Full Changelog: [v0.1.0-beta.3...v0.1.0-beta.4](https://github.com/optechai/node-sdk/compare/v0.1.0-beta.3...v0.1.0-beta.4)

### Features

* **api:** api update ([#57](https://github.com/optechai/node-sdk/issues/57)) ([d4df811](https://github.com/optechai/node-sdk/commit/d4df8112ccc239964f720ce7579eacac42033807))


### Chores

* **internal:** version bump ([#54](https://github.com/optechai/node-sdk/issues/54)) ([87db91f](https://github.com/optechai/node-sdk/commit/87db91fbd67e52ed89fc961c4c276f239bc8404b))

## 0.1.0-beta.3 (2024-11-05)

Full Changelog: [v0.1.0-beta.2...v0.1.0-beta.3](https://github.com/optechai/node-sdk/compare/v0.1.0-beta.2...v0.1.0-beta.3)

### Features

* chore: remove custom runner ([858d6cb](https://github.com/optechai/node-sdk/commit/858d6cb370342f02c305e066d765364f41559568))


### Chores

* **internal:** version bump ([#51](https://github.com/optechai/node-sdk/issues/51)) ([a13fa42](https://github.com/optechai/node-sdk/commit/a13fa426430b92681081e6a066e3b85a11fd2591))

## 0.1.0-beta.2 (2024-11-04)

Full Changelog: [v0.1.0-beta.1...v0.1.0-beta.2](https://github.com/optechai/node-sdk/compare/v0.1.0-beta.1...v0.1.0-beta.2)

### Chores

* **internal:** version bump ([#48](https://github.com/optechai/node-sdk/issues/48)) ([1f6cf7d](https://github.com/optechai/node-sdk/commit/1f6cf7de5a57381296fde1f73bb2a48cd47ff152))

## 0.1.0-beta.1 (2024-11-04)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-beta.1](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.13...v0.1.0-beta.1)

### Bug Fixes

* **api:** manual updates ([#46](https://github.com/optechai/node-sdk/issues/46)) ([4d8152d](https://github.com/optechai/node-sdk/commit/4d8152dd020e4d322ab71e78fc7dbd920e31e08c))


### Chores

* update SDK settings ([#43](https://github.com/optechai/node-sdk/issues/43)) ([c3f8908](https://github.com/optechai/node-sdk/commit/c3f8908963deb21cda480fe348c9b8642e45aeeb))

## 0.1.0-alpha.13 (2024-11-01)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **api:** api update ([#39](https://github.com/optechai/node-sdk/issues/39)) ([a5781ce](https://github.com/optechai/node-sdk/commit/a5781ced3ed926d7599619775cb0ab73201b05b5))

## 0.1.0-alpha.12 (2024-10-31)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* chore: account for empty body ([1186ba5](https://github.com/optechai/node-sdk/commit/1186ba5e86f3976fc3949cf1e20c52f45561ee8c))
* chore: adjust generated test ([ab4b394](https://github.com/optechai/node-sdk/commit/ab4b39448fced35c60ff9bffbf714dad2b631e2c))
* feat: adjust signature generation to use raw body ([7db7f2f](https://github.com/optechai/node-sdk/commit/7db7f2f9571ff31bd6c84086d8d10aa0a49beda1))

## 0.1.0-alpha.11 (2024-10-31)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* fix: add more refined publish npm to always publish next ([68525e9](https://github.com/optechai/node-sdk/commit/68525e9213d289cf167444232ad0aabd534287aa))

## 0.1.0-alpha.10 (2024-10-31)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* fix: update the way auth headers are constructed ([952d4ed](https://github.com/optechai/node-sdk/commit/952d4ed907c082f37c47b0dac5f5c75889d9d363))

## 0.1.0-alpha.9 (2024-10-31)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Bug Fixes

* **api:** stainless config updates ([#30](https://github.com/optechai/node-sdk/issues/30)) ([e83c14c](https://github.com/optechai/node-sdk/commit/e83c14c123f2c421a922d4bfe26a2ec84223a6d3))

## 0.1.0-alpha.8 (2024-10-31)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* feat: add auth ([3e564ab](https://github.com/optechai/node-sdk/commit/3e564abee9abd0168ec7abf891254d26e3831c55))

## 0.1.0-alpha.7 (2024-10-30)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** api update ([#25](https://github.com/optechai/node-sdk/issues/25)) ([486a6de](https://github.com/optechai/node-sdk/commit/486a6dee4c9f3f9fab34cc88ec57263667ae2302))

## 0.1.0-alpha.6 (2024-10-30)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* chore: fix no git checks ([b937333](https://github.com/optechai/node-sdk/commit/b937333af237ad5b8e9cca9af68ce5087983d1cd))

## 0.1.0-alpha.5 (2024-10-30)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** api update ([#20](https://github.com/optechai/node-sdk/issues/20)) ([171a387](https://github.com/optechai/node-sdk/commit/171a387c16ad5b2b54c199c5426382d02b5ae4b5))
* chore: add ubuntu-latest ([b46e897](https://github.com/optechai/node-sdk/commit/b46e897b8c1d186f3c4ca85c6aa679955e7578e2))
* chore: try this ([679bb85](https://github.com/optechai/node-sdk/commit/679bb85b050cc5980ad3a67170a538900b40032f))

## 0.1.0-alpha.4 (2024-10-30)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* chore: try this for publish ([53747b7](https://github.com/optechai/node-sdk/commit/53747b7cb8462a2bee382a5cd582e2dff0dbcdb8))

## 0.1.0-alpha.3 (2024-10-30)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* chore: add base url ([a4f19e1](https://github.com/optechai/node-sdk/commit/a4f19e18cf9298444a21f375d3d6b35582822692))
* chore: format ([12eae60](https://github.com/optechai/node-sdk/commit/12eae60eb0ad49c944bfac52054d940e32ebf8aa))
* chore: further tweak of test ([13c1043](https://github.com/optechai/node-sdk/commit/13c1043da4be0e4817910a12f5f02900aa83f8ee))
* chore: reinstance node-fetch ([c13b575](https://github.com/optechai/node-sdk/commit/c13b5751d2dad94fc2d372fa2bc69264243134e0))
* fix: more type fixes ([5aa5680](https://github.com/optechai/node-sdk/commit/5aa5680fe99cc432e64f419c9ad2f3a975640cb7))
* fix: resolve type errors ([d1c689f](https://github.com/optechai/node-sdk/commit/d1c689f57bdfa8e650cae7e8ce988aa5db05b9c5))
* various codegen changes ([ed11dc6](https://github.com/optechai/node-sdk/commit/ed11dc6b5666384ccd3b7cb9db2d184a8fc4cea4))


### Bug Fixes

* main branch ([933bfe9](https://github.com/optechai/node-sdk/commit/933bfe984e459281c1e9602695ec898fc9cdab5e))


### Chores

* update ci/actions ([645e253](https://github.com/optechai/node-sdk/commit/645e253adc9448e5ec9a7f7084d59025886fcb61))

## 0.1.0-alpha.2 (2024-10-28)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/optechai/node-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([#6](https://github.com/optechai/node-sdk/issues/6)) ([3078f36](https://github.com/optechai/node-sdk/commit/3078f360f3957f91352415fa834418c5f8b05b71))
* **api:** update via SDK Studio ([#8](https://github.com/optechai/node-sdk/issues/8)) ([deaf9d5](https://github.com/optechai/node-sdk/commit/deaf9d58eb28691faae681527ec062e29eaa5b9e))

## 0.1.0-alpha.1 (2024-10-25)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/optechai/node-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([7d17dac](https://github.com/optechai/node-sdk/commit/7d17dac88281cbcdaee641610f469ba6dafa3c78))
* **api:** api update ([4c4f7be](https://github.com/optechai/node-sdk/commit/4c4f7be5cf28e9bb19e875d42998b3c68827159e))
* **api:** api update ([#1](https://github.com/optechai/node-sdk/issues/1)) ([49ac420](https://github.com/optechai/node-sdk/commit/49ac420cb091100de72c4be90b9e0e1bc2707330))
* **api:** update via SDK Studio ([314dd07](https://github.com/optechai/node-sdk/commit/314dd07d0dd1b098f4a7c3d8863893ed18cb059d))


### Chores

* go live ([#4](https://github.com/optechai/node-sdk/issues/4)) ([61188c0](https://github.com/optechai/node-sdk/commit/61188c0f7612cc21cc97d535296d119b19947a1b))
* update SDK settings ([bf60384](https://github.com/optechai/node-sdk/commit/bf6038486cf2767287c54354d1ba6c2e0c4f99a1))
