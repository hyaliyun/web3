/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/pos.png'),
    name: 'Gavin Wood',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
Web3 will realize a more democratic and decentralized version of the Internet.🎉
Polkadot aims to solve the interoperability problem between blockchains and allow cross-chain transactions
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/shop.png'),
    name: 'Vitalik Buterin',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
The Ethereum network is essentially the first blockchain-based decentralized network for things other than cryptocurrencies - decentralized applications👀
Ethereum's overall contribution to bringing Web3 closer cannot be ignored
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: 'Theresia le Battistini',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
I'm a big believer in Web3 and equal opportunity, which led me to found Fashion League (FL), a Web3 platform for female gamers.✔️
FL gives female gamers the opportunity to become their own fashion designers and turn their designs into NFTs.
      </Translate>
    ),
  },
];

export default QUOTES;
