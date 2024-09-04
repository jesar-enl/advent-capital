export default function PreviewLetter({ data }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(data.date).toLocaleDateString(undefined, options);

  return (
    <section className="bg-white text-gray-900">
      <div className="mx-auto flex flex-col space-y-2">
        <div className="flex justify-end">
          <img
            src="/images/adventcapital_logo.png"
            alt="Advent Capital Logo"
            className="right-0 h-12 w-16"
          />
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-base font-semibold">Ref:</p>
          <p className="text-base font-semibold">Date: {date}</p>
        </div>
      </div>
      <p className="mt-3 text-center text-lg font-bold">
        Re: <span className="underline">LOAN AGREEMENT</span>
      </p>
      <p className="mt-2 text-base">
        We are pleased to advise you that subject to your application, we hereby
        offer you a loan in accordance with the terms and conditions set out in
        this agreement and other loan documents to be executed after this offer
        letter.
      </p>
      <div className="">
        <p className="font-semibold">1. Definitions and Interpretation</p>
        <div className="ml-3">
          <div className="flex flex-col text-base">
            <p>
              In this letter, the following words shall have these particular
              meanings:
            </p>
            <p>
              <span className="font-semibold">Borrower:</span> {data.name}
            </p>
            <p>
              <span className="font-semibold">Lender:</span> Advent Capital
            </p>
          </div>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            2. Business Type:{" "}
            <span className="font-normal">{data.bustype}</span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            3. Business Location:{" "}
            <span className="font-normal">{data.busLocation}</span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            4. Loan Type: <span className="font-normal">{data.loanType}</span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            5. Purpose of loan:{" "}
            <span className="font-normal">{data.purpose}</span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            6. Loan Amount:{" "}
            <span className="font-normal underline">
              UGX. {data.loanAmount}
            </span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            7. Loan Period:{" "}
            <span className="font-normal">
              {data.loanPeriod} working days/months
            </span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">
            8. Repayment:{" "}
            <span className="font-normal">
              ______________________________________________________________________________
            </span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">9. Normal Interest:</p>
          <p className="ml-3 font-normal">
            (i) The loan shall be charged at{" "}
            <span className="underline">{data.loanInterest}%</span>
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">10. Penal Interest:</p>
          <p className="ml-3 font-normal">
            If the borrower fails to pay any sum payable under the granted loan
            on its due date, the borrower shall pay interest on such sums from
            the date of such failure to the date of actual payment (as well as
            after and before any demand, judgment) at the rate of 1% per day
            above the rate specified in clause 9 (i) of this agreement.
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">11. Undertakings:</p>
          <p className="ml-3 font-normal">
            So long as the proposed loan is available or outstanding, the
            borrower undertakes with the lender as follows:
          </p>
          <ol className="ml-10 list-decimal font-normal">
            <li>
              The borrower shall immediately and promptly repay the loan to the
              lender within the specified period without fail.
            </li>
            <li>
              The borrower shall provide the lender with such information and
              documents concerning its business and financial position and
              prospects as may from time to time be requested.
            </li>
            <li>
              The borrower shall pay to the lender on demand all expenses
              (including any legal, and out of pocket expenses, and together
              with any taxes thereon) on a full indemnity basis incurred in
              connection with the fulfillment of all conditions of the proposed
              loan, the failure of the borrower to comply with any of its
              obligations under this letter and/or any security document, any
              amendment or extension of and the granting of any waiver or
              consent and the discharge of this letter and/or any security
              document and/or in contemplation of or otherwise in connection
              with the enforcement or preservation of any rights under this
              letter and/or any security document or otherwise in respect of any
              monies owing under or in respect of the loan.
            </li>
            <li>
              The borrower shall on demand pay to the lender all moneys and
              discharge all obligations and liabilities whether actual or
              contingent, now or hereafter due owing or incurred to the lender
              by the borrower in whatever currency denominated whether on any
              current or other account or otherwise in any manner whatsoever
              (whether alone or jointly and in whatever style, name or form and
              whether as principal or guarantor).
            </li>
            <li>
              The borrower shall utilize the loan for the sole purpose for which
              the said loan has been sanctioned, and or no other purpose
              whatsoever. The lender shall be under no obligation to monitor the
              use of the loan.
            </li>
            <li>
              Not to create or allow to subsist any charge, mortgage, pledge,
              lien, or other encumbrance over its assets or undertaking without
              the lender&#39;s prior written consent.
            </li>
            <li>
              Not to sell, transfer or otherwise dispose of its assets or
              undertaking without the lender&#39;s prior written consent.
            </li>
            <li>
              Not to alter/interfere with any of the security provided herein
              during the currency/duration of the loan without the lender&#39;s
              prior written consent.
            </li>
          </ol>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">12. Security:</p>
          <p className="ml-3 font-normal">
            <span className="font-semibold">12.1</span> In consideration of the
            lender granting the loan and as security for the same, the borrower
            hereby agrees to create security in favour of the lender over the
            assets set out below, (hereinafter collectively referred to as the
            “security”);
          </p>
          <p className="ml-6">
            (i) <span className="underline">{data.security}</span>
          </p>
          <p className="ml-6">
            (ii) <span className="font-semibold">Personal Guarantors</span>
          </p>
          <div className="ml-12 grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col">
              <span>Name:__________________</span>
              <span>Tel. no.:_________________</span>
              <span>Sign:__________________</span>
            </div>
            <div className="flex flex-col">
              <span>Name:__________________</span>
              <span>Tel. no.:_________________</span>
              <span>Sign:__________________</span>
            </div>
            <div className="flex flex-col">
              <span>Name:__________________</span>
              <span>Tel. no.:_________________</span>
              <span>Sign:__________________</span>
            </div>
          </div>
          <p className="ml-3 font-normal">
            <span className="font-semibold">12.2</span> The borrower hereby
            authorizes the lender to create charge over the said assets in
            favour of the lender by registering of charges with various
            authorities, and the borrower agrees to repay the same together with
            interest at the rate as specified in this offer letter.
          </p>
          <p className="ml-3 font-normal">
            <span className="font-semibold">12.3</span> The security provided
            under this agreement shall be for repayment of the loan together
            with the interest and other obligations herein of the borrower
            towards the lender. At no point of time during the subsistence of
            the loan shall the borrower be allowed to withdraw any security or
            part of it provided hereunder except with the prior written consent
            of the lender, which consent may be given at the discretion of the
            lender.
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">13. Events of default:</p>
          <p className="ml-3 font-normal">
            <span className="font-semibold">13.1</span> The following events
            will constitute default and cause any amount outstanding under the
            proposed loan to become immediately due and repayable and any
            commitments herein cancelled:
          </p>
          <p className="ml-6">
            (i) <span className="font-semibold">Failure to pay:</span> the
            borrower does not or fails to pay any amount due under the offer
            letter on the due date or on demand if so payable: or
          </p>
          <p className="ml-6">
            (ii) The borrower admits in writing its inability to pay or shall
            become unable to pay its debts generally as they fall due, or become
            insolvent, or file any petition or action for relief under any
            insolvency law.
          </p>
          <p className="ml-3 font-normal">
            <span className="font-semibold">13.2 Consequences of default:</span>
          </p>
          <p className="ml-6">
            Following an event of default, the lender shall have the discretion
            to exercise the following options;
          </p>
          <p className="ml-10">
            a. Immediately cancel any undrawn element of the loan.
          </p>
          <p className="ml-10">
            b. Declare the whole outstanding loan amount due and payable and
            recall the same.
          </p>
          <p className="ml-10">
            c. Declare the whole outstanding loan amount to be payable on
            demand;
          </p>
          <p className="ml-10">
            d. Declare all or any of the securities pledged for the loan to be
            enforceable to recover the outstanding loan amount.
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-normal">
            14. Any change of address, telephone number or email address of the
            borrower or guarantor must be promptly notified to the lender in
            writing or in any other manner agreed to by the lender within
            reasonable time but in any case, not more than five (5) days from
            the date of change.
          </p>
        </div>
        <div className="flex flex-col text-base">
          <p className="font-semibold">15. Force majeure:</p>
          <p className="ml-3 font-normal">
            The lender shall not be liable for any failure to perform its
            obligations herein caused by reasons beyond its control or resulting
            directly or indirectly from the action or inaction of the
            government, any government authority, riot, strikes, boycott,
            blockade, act of God, revolution, civil strike, pandemics,
            epidemics, terrorist attacks, crimes, property destruction, change
            in legislation or extreme change in market conditions.
          </p>
        </div>
        <div className="mt-3">
          <span>Yours faithfully,</span>
          <p className="text-sm">For and on behalf of the lender,</p>
          <div className="mt-3 grid grid-cols-2">
            <div className="flex flex-col">
              <span>___________________</span>
              <span>Manager</span>
            </div>
            <div className="flex flex-col">
              <span>___________________</span>
              <span>Credit Officer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="ml-16 text-lg font-semibold underline">
          Form of Acceptance
        </p>
        <p>
          <span className="font-semibold">I/we</span>,
          ___________________________________________ being the borrower confirm
          that we have read and understood the terms and conditions of the loan
          and do hereby accept the loan detailed in this agreement on this ____
          day of _________ 20____ on the terms and conditions contained herein
          above after a thorough reading and understanding the contents therein.
        </p>
        <p className="font-semibold tracking-normal">
          Signed, sealed and delivered by:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-3">
          <div className="flex flex-col gap-2">
            <span>________________</span>
            <span>Name</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>________________</span>
            <span>Signature</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>________________</span>
            <span>Date</span>
          </div>
        </div>
      </div>
    </section>
  );
}
