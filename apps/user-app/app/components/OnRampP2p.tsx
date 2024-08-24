import { Card } from "@repo/ui/card"

export const OnRampP2p = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    type: "Received" | "Sent";
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t, index) => (
          <div className="flex justify-between" key={index}>
            <div>
              <div className="text-sm">{t.type} INR</div>
              <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
            </div>
            <div className="flex flex-col justify-center">
              {t.type === "Received" ? "+ " : "- "} Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};