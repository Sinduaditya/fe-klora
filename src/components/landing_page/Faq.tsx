
const faqData = [
    {
        id: 1,
        question: 'Bagaimana cara bergabung dengan klora menjadi seorang Volunteer yang akan menerima botol sekali pakai?',
        answer: 'Hubungi kami dengan klik tombol join now, lalu admin akan menyerahkan persyaratan guna pendaftaran lebih lanjut !',
    },
    {
        id: 2,
        question: 'Apa yang saya dapatkan ketika bergabung sebagai user di Klora ?',
        answer: 'Yang anda dapatkan adalah kemudahan menjual botol air minum sekali pakai yang langsung terhubung dengan para Volunteer kami yang  tersebar di semarang' +
            ', dan ketika anda menjual botol anda maka akan mendapatkan token utilitas yang dapat di tukar dengan crypto curency Toncoin (KLO) !',
    },
    {
        id:3,
        question: 'Apakah dengan mengupgrade BAG maka akan menaikan nilai tukar Utilitas BTL saya ?',
        answer: 'Benar sekali, dengan anda membeli BAG secara tidak langsung anda akan langsung berkontribusi terhadap penanaman pohon yang ada di hutan konservasi dari Klora dan pastinya juga akan meningkatkan nilai tukar ' +
            'Utilitas BTL terhadap Toncoin (KLO)  !'
    }

];

export default function FAQPage() {
    return (
        <>
            <div className="w-full mt-16 pb-[5vh]  text-text font-outfit md:pt-[1vh] mb-12">
                <div
                    className="xl:max-w-5xl mx-auto  py-16 items-center space-x-18 pl-4 pr-4">
                    <h1 className="text-xl font-semibold text-black text-center md:text-[20px]">
                        Informasi Lebih lanjut   
                    </h1>
                    <h1 className="text-[2rem] mb-16 tracking-tight text-center md:text-[3rem] font-bold text-primary-700 leading-[110%] mt-5">
                        FAQ
                    </h1>
                    <div className="flow-root">
                        <div className="-my-8 divide-y divide-gray-100">
                            {faqData.map((faq) => (
                                <details key={faq.id} className="group py-8">
                                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                                        <h2 className="text-lg font-medium">{faq.question}</h2>
                                        <span className="relative size-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                                    </summary>

                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
