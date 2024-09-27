/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Web3 Basics ⭐',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/owner.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        ❤️ Understand the origin, core concepts and impact of Web3 on the future of the Internet.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Blockchain and Ethereum Technology',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/amazon-photos.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
     ✅ Learn blockchain technology and Ethereum platform in depth, master its working principles and application scenarios.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Digital Identity and Privacy Protection',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/baidu.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       ✨ Explore the importance of digital identity in Web3 and how to protect personal privacy through encryption technology.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'NFTs and Digital Art',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/Google-Business.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
         🔥 Analyze the concept of NFTs (non-fungible tokens) and understand its application and value in the digital art market.🚀
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Finance and Smart Contracts',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/google-earth.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
           📜 Learn the principles of decentralized finance (DeFi), master the writing and execution of smart contracts, and open a new era of finance.
      </Translate>
    ),
  },
];

export default FEATURES;
