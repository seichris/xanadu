import React from 'react';
import products1 from '.././images/products/mars.jpg';
import products2 from '.././images/products/chongqing.jpg';
import products3 from '.././images/products/shanghai.jpg';

function ProductSection(props) {
  return (
    <>
    <section className="py-12 px-4 text-center">
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">PRODUCT EXAMPLES</p>
      <h2 className="text-4xl mb-4 font-heading">So how does this create value?</h2>
      <p className="max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed">who can use this. how can use this. Where value? How growth?</p>
      <div className="flex max-w-lg mx-auto mb-12 border-b-2">
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

          v2b: anti fake news / two-sided opinion formation
          ➖ know another source, which says the opposite? Post it and get rewarded

          v3: videos, music, restaurants, longread, movie recommendations
          ➖ p2p recommendations: similar to this

          v4: make webUI more interesting
          ➖ follow lists like "darkmode everywhere" and pay everyone a split who adds a website to the list
          ➖ follow a list

          v5: brave ads // market to value advertisements per user
          ➖ allow brave to put ads... get feedback on ads...
          ➖ market prices ads

          v6: against cheating, for monetization
          ➖ playfield for game mechanics around "trading information"
          ➖ DAI staking
          ➖ personal token issuance, ...
          ➖ topic tokens to reward contribution to each list...

          v7: ?
          ➖ join the chat

        */}
        <div className="w-1/3 pb-2 border-b-4 border-indigo-500">
          <div>Help Ethereum onboarding</div>
        </div>
        <div className="w-1/3 pb-2">
          <div>or different target groups categories</div>
        </div>
        <div className="w-1/3 pb-2">
          <div>or???</div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 -mb-8">
        <div className="hidden md:block md:w-1/2 px-4 mb-8">
          <div className="mb-8 relative hover-trigger">
            <img className="rounded shadow-md hover-background" src={products1} alt=""/>
            <div className="hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto">
              <h2 className="text-3xl font-heading text-white">Use this textbox in the above div</h2>
              <p className="max-w-sm mt-auto mb-8 text-white leading-relaxed">
              text text text text text text text text text text text
              </p>
              <a className="text-right text-blue-100 hover:underline" href="/">View link</a>
            </div>
          </div>
        </div>
        <div className="h-auto md:w-1/2 px-4 mb-8">
          <div className="mb-8 relative hover-trigger">
            <img className="rounded shadow-md hover-background" src={products2} alt=""/>
            <div className="hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto">
              <h2 className="text-3xl font-heading text-white">Use this textbox in the above div</h2>
              <p className="max-w-sm mt-auto mb-8 text-white leading-relaxed">
              text text text text text text text text text text text
              </p>
              <a className="text-right text-blue-100 hover:underline" href="/">View link</a>
            </div>
          </div>
          <div className="mb-8 relative hover-trigger">
            <img className="rounded shadow-md hover-background" src={products3} alt=""/>
            <div className="hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto">
              <h2 className="text-3xl font-heading text-white">Use this textbox in the above div</h2>
              <p className="max-w-sm mt-auto mb-8 text-white leading-relaxed">
              text text text text text text text text text text text
              </p>
              <a className="text-right text-blue-100 hover:underline" href="/">View link</a>
            </div>
          </div>
        </div>
      </div>

      <div>
      <a className="inline-block m-16 py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="/">Which other use cases come to your mind?</a>
      </div>
    </section>
    </>
  );
}

export default ProductSection;
