import identity from '../../assets/identity.png'

export default function OurIdentity() {
  return (
    <div>
      <h1 className="text-primary text-[32px] leading-[36.77px] font-bold mb-[36px] mt-[92px]">Sobre nós</h1>
      <section className="">
        <p className="first-letter:ml-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis neque ducimus rem consequuntur quae aperiam, molestias ea laborum mollitia numquam ab suscipit amet eligendi aliquid iure ipsum laboriosam quasi.
          Eius cupiditate saepe sed obcaecati corporis repellendus, ipsam veniam quod pariatur maiores labore voluptates, esse eos iste laborum reprehenderit quae eligendi nihil! Tempore, expedita reiciendis quaerat tempora magnam ea sint!
          Natus, earum! Neque, eum facilis tempora repellat pariatur sed doloribus vitae, natus deleniti asperiores voluptatum, nihil voluptas veniam. Sunt deleniti quaerat necessitatibus recusandae nisi impedit nam aspernatur nemo! Explicabo, asperiores!

          Fugiat exercitationem iusto esse fugit praesentium, cumque magni quasi, suscipit hic, corporis assumenda nulla autem? Quam ipsa perferendis, dolores aliquam aperiam harum placeat? Commodi repellat quis voluptatem nemo libero assumenda.
          Qui dignissimos ut accusantium aliquam repellendus consequatur ex facilis nobis ad tempore nihil, est consectetur quibusdam molestiae, ducimus omnis consequuntur libero perferendis voluptatum mollitia odit numquam totam. Culpa, dolores placeat!
          Animi architecto, quo aut doloremque laudantium deleniti, perferendis distinctio officia itaque illum blanditiis consequatur ut odit quam suscipit quod aspernatur sit autem ducimus veritatis? Amet laboriosam esse laborum consequatur officiis?
        </p>

        <p className="mt-10 first-letter:ml-10">
          Alias debitis iure aperiam voluptate delectus recusandae id, culpa vitae consequatur ea quibusdam saepe? Neque cumque, explicabo sit quas pariatur tenetur autem molestias perferendis iusto porro soluta dolorem, obcaecati asperiores.
          Inventore omnis, similique voluptates excepturi vero ex eos asperiores. Sint consectetur molestias exercitationem illo ea aliquam sed deserunt laboriosam ullam facilis nemo unde qui architecto accusamus aliquid, similique dolores dolore.
        </p>

        <ul className="m-0 p-5 mt-8">
          <li className="list-disc">Lorem ipsum dolor sit amet.</li>
          <li className="list-disc">Lorem ipsum dolor sit amet.</li>
          <li className="list-disc">Lorem ipsum dolor sit amet.</li>
          <li className="list-disc">Lorem ipsum dolor sit amet.</li>
          <li className="list-disc">Lorem ipsum dolor sit amet.</li>
        </ul>

        <div className='flex justify-center'>
          <img src={identity} alt="Identidade da loja" />
        </div>
      </section>
    </div>
  );
}