function Choice() {
  const cards = [
    {
      title: 'We are a fast loan provider',
      content:
        'Our application form should take you no longer than 5 minutes to complete. Usually we have processed your loan a short-time later with the money on its way to your bank account in minutes.',
    },
    {
      title: 'We are commited to responsible lending',
      content:
        "We take our obligations seriously and we don't want to lend you money if you can't afford to repay it. This takes our total focus every day.",
    },
    {
      title: 'We care about Customer service',
      content:
        "Just because it's  a small loan, it does'nt mean it's not important. If you need to know your current balance, the status of your loan, your repayment dates or get another loan, then you can log onto our secure client area and it's all there. You can get us on chat during business hours.",
    },
    {
      title: "We understand things don't always go as planned",
      content:
        "Things are getting tough and budgeting doesn't always work out when unexpected things happen. Our cash loans are not like credit cards or other forms of revolving credit, you get the money fast, you pay it off fast, and thats it. If you need us again, just login and apply for an even faster loan its that simple.",
    },
    {
      title: "Your credit history isn't perfect",
      content:
        "You generally do the right thing and pay off your debts and sometimes that takes time. We won't penalize you because you've had some bad luck and your credit file isnfect. What we look for is a recent history of repayment and affordability via your credit report and bank statements to check your payment history.",
    },
  ];

  return (
    <div className="p-4 bg-gray-200">
      <div className="text-center text-green-500 mb-4">
        <h1 className="text-3xl tracking-wide">Why People Choose Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(({ title, content }) => (
          <div
            key={title}
            className="bg-white rounded-lg p-6 text-center shadow-md"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="tracking-wide leading-relaxed text-gray-600">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choice;
