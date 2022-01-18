import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialLinks = (): JSX.Element => {
  return (
    <div className="border border-white mt-5">
      <h3 className="block m-5">Links</h3>
      <div className="mx-auto p-5 m-5 flex justify-center">
        <div className="inline mx-auto">
          <a href="https://www.linkedin.com/in/travis-wickham-csd-66273a69/" target="_blank">
            <BsLinkedin size={50} />
          </a>
        </div>
        <div className="inline mx-auto">
          <a href="https://github.com/wickedwick" target="_blank">
            <BsGithub size={50} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
