---
title: How to verify checksum of Rubix files
geekdocBreadcrumb: false
aliases: ["/md5", "/rubix", "/jar", "/verify"]
---

A checksum is a special type of hash that is used to verify the integrity of a file. Verifying a checksum ensures there was no corruption or manipulation during the download and the file was downloaded completely and correctly.

A common use case for checksum verification is to verify a large downloaded file. MD5 and SHA1 hashes are commonly used for this task. We will look at easy ways to obtain a hash to verify a checksum.

Checksums only verifies integrity of a file. It does not provide any confidentiality or encryption.

## Verify MD5 checksums

If your downloaded file is not in the home path of the terminal, either inlcude the path of downloaded file in "filename" or open terminal session in the downloaded file's path.

Once the md5 checksum is calucated you can verify the checksum hash with that in Rubix's Github Releases.

### MacOS

    $ md5 <filename>


### Windows (PowerShell)

    $ Get-FileHash <filename> -Algorithm MD5

### Linux

    $ md5sum <filename>