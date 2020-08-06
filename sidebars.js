// module.exports = {
//   someSidebar: {
//     Docusaurus: ['doc1', 'doc2', 'doc3'],
//     Features: ['mdx'],
//   },
// };

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'More',
      items: [
        {
          type: 'category',
          label: 'Auto Indent',
          items: [
            {
              type: 'category',
              label: 'SQL Queries',
              items: ['more/autoIndent/actualIndent', 'more/autoIndent/avgSalesLastThirtyDays', 'more/autoIndent/avgSalesLastThreeWeekDays', 'more/autoIndent/moqSuf', 'more/autoIndent/stockHoldingFactor', 'more/autoIndent/stockOnHand'],
            },
          ],
        },
      ],
    }
  ]
};
