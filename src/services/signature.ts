import { BinaryToTextEncoding, createHash } from 'crypto';

export function sha256Hash(content: string, encoding: BinaryToTextEncoding = 'hex') {
    return createHash('sha256').update(content).digest(encoding);
}
