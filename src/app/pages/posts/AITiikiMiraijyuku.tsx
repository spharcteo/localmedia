import Header from '../../components/header'
import Image from 'next/image'
import { posts } from '../../page'

export default function page1(){
 return (
     <article className="min-h-screen bg-white">
      <Header title={posts[0].title} />

      <div className="pt-16"> {/* Spacing for fixed header */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={posts[0].image}
            alt={posts[0].title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="prose prose-lg max-w-none">
            {posts[0].content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph.includes('・') ? (
                  <ul className="list-disc pl-4 space-y-2">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('・', '')}</li>
                    ))}
                  </ul>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* Additional images can be added here */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Additional content"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Additional content"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Additional content section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">追加情報</h2>
            <p>
              プログラムの詳細や参加方法については、お問い合わせフォームからご連絡ください。
              定期的に開催される説明会でも、詳しい情報をご案内しています。
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}