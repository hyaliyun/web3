/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Logo from './Logo';

import GridBackground from './GridBackground';
import FloorBackground from './FloorBackground';
import Devices from './Devices';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <a
          className="twitter-follow-button"
          href={`https://www.543x.com`}
          data-show-count="false"
          data-size="large">
          Follow @web3
        </a>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <GridBackground />
        </div>
        <div className={styles.devices}>
          <Devices />
        </div>
        <div className={styles.floorBackground}>
          <FloorBackground />
        </div>
      </div>
      <div className={styles.content} >
      <Logo />
        <h1 className={styles.title}>What is Web3?</h1>
        <h2 className={styles.subtitle}>Learn once, What is Web3?</h2>
        <div className={styles.buttonContainer}>
          <a href="/docs/introduction" className={styles.primaryButton}>
            Get Started
          </a>
          <a href="https://s.543x.com" className={styles.secondaryButton}>
          Web3?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
