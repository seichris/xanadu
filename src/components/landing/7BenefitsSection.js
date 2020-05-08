import React from 'react';
import xanadu from './../../images/logos/eth.png';
import eth from './../../images/logos/eth_logo.png';
import threebox from './../../images/logos/3box.png';
import ipfs from './../../images/logos/ipfs.png';

function BenefitsSection(props) {
  return (
    <section className="py-12 px-4 text-center">
      {/*<h2 className="text-4xl mb-2 leading-tight font-heading">...so we match these two sites, exactly where they now dont meet. this is how it works...</h2>
      <p className="text-gray-500">click the div to auth with ethereum and open your first note</p>*/}
      <div className="flex flex-wrap items-center -mx-8 mt-12 mb-2">
        <div className="flex flex-col lg:w-1/4 px-8 mb-8">
          <img className="h-20 w-auto mx-auto  mb-4" src={eth} alt="ethereum"/>
          <p className="font-semibold mb-2">
          Rewards
          </p>
          <p className=" mb-2">
          Like reddit karma, on the Ethereum blockchain
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          <img className="h-16 w-auto mx-auto  my-4" src={ipfs} alt="ipfs"/>
          <p className="font-semibold mb-2">
          Anywhere, forever, accountable
          </p>
          <p className=" mb-2">
          Safe data to ipfs, for it shall always be there
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          <img className="h-16 w-auto mx-auto  my-4" src={threebox} alt="3box"/>
          <p className="font-semibold mb-2">
          Private sharing
          </p>
          <p className=" mb-2">
          Share with a group of friends or the public
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          <img className="h-20 w-auto mx-auto  mb-4" src={xanadu} alt="ethereum"/>
          <p className="font-semibold mb-2">
          Anonymous reputation
          </p>
          <p className=" mb-2">
          Build reputation for your eth address, or import your twitter
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;


{/* Prodcuts to build on the protocol
  what categories? #how-to-monetize #target-group

  v1 products: match experienced ethereum community members <to> new ones. building onchain reputation of important stakeholders https://vitalik.ca/general/2019/11/22/progress.html#numbertwelve
  ➖ ethereum dev mentorship. you want to find the experienced guy who is good at explaining the topic you are interested in… You find him, by looking at the content you search.
  ➖ ethereum connected knowledge base

  v2: TL;DR addon
  ➖ notes anywhere, just for yourself
  ➖ Bigger audience for weekinethereum, putting comments from annotated version on websites where people wanna find it.
  ➖ Smart contract security information ‘incompatible with erc777’
  ➖ Address book / labelled addresses: Share address book with friends
  ➖ React to security incidents instantly: Label bad addresses, ad security warning to bad websites (and get rewarded for it)
  ➖ Rate an ICO project. Add a comment to a website
  ➖ Rate any site (crowdsourced google schema 5star rating)
  ➖ Customer feedback. A siteowner wants to see comments on his site directly
  ➖ put relevant tweets on ethereum.org https://twitter.com/pedrouid/status/1256548140049674241

  v2b: anti fake news / two-sided opinion formation
  ➖ know another source, which says the opposite? Post it and get rewarded

  v3: videos, music, restaurants, longread, movie recommendations
  ➖ p2p recommendations: similar to this

  v4: personalize other websites (chrome addons, changing static code, on ipfs)
  ➖ users hang out on the same sites around the web. You can personalize them with some addons.
  ➖ follow lists like "darkmode everywhere" and pay everyone a split who adds a website to the list
  ➖ follow a list
  ➖ tag addresses on etherscan: https://info.etherscan.com/etherscan-connect-a-beginning/

  v5: brave ads // market to value advertisements per user
  ➖ allow brave to put ads... get feedback on ads...
  ➖ market prices ads

  v6: against cheating, for monetization
  ➖ playfield for game mechanics around "trading information"
  ➖ DAI staking
  ➖ personal token issuance, ...
  ➖ topic tokens to reward contribution to each list...

  v7: TL;DR for developing world
  ➖ decentralized distribution: ipfs is great for developing world. bad internet connection, offline.
  ➖ resilient, no DDOS

  v7: existing context
  ➖ show twitter search, reddit search, hackernews search. if that link is posted there
*/}
