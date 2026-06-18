function SocialCard({ post }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <h3 className="font-bold">
        @{post.user}
      </h3>

      <p className="mt-2 text-gray-600">
        {post.content}
      </p>

    </div>
  );
}

export default SocialCard;