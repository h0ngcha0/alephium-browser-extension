import * as React from 'react';
import { browser, Tabs } from 'webextension-polyfill-ts';

import './styles.scss';

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({ url });
}

const Popup: React.FC = () => {
  return (
    <section id="popup">
      <h2>Alephium Wallet</h2>
      <button
        id="expandedview__button"
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          return openWebPage('expandedview.html');
        }}
      >
        Expand View
      </button>
    </section>
  );
};

export default Popup;
