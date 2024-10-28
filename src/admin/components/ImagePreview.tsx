import { Image } from 'react-bootstrap'

interface imageUrlType {
    imageUrl: string | undefined 
}

const ImagePreview: React.FC<imageUrlType> = ({ imageUrl }) => {
    return (
        <>
            <Image
                src={imageUrl}
                alt="Image Preview"
                fluid
                className="mt-3"
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
        </>
    )
}

export default ImagePreview