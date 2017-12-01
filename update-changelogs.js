var fs = require('file')

var TOKEN=guqJLjy225sWgcBAtPsq
curl -L https://git.rtx.mapspeople.com/api/v3/projects/21/repository/raw_blobs/26c88ae412cf1cebd3e25cda5f81070db28e29a0?private_token=$TOKEN -o content/android/changelog.md
curl -L https://git.rtx.mapspeople.com/api/v3/projects/3/repository/raw_blobs/506f11b0c970c9949daa71ea8cb8dc5d8aa92e8a?private_token=$TOKEN -o content/ios/changelog.md
curl -L https://git.rtx.mapspeople.com/api/v3/projects/10/repository/raw_blobs/d7aa46ddc0d15487389767692e8727d9d249c656?private_token=$TOKEN -o content/cms/changelog.md

REPLACE_STR="# Changelog"
REPLACEMENT="---\n\ntitle: Changelog\n\n---"

ANDROID=`cat content/android/changelog.md`
IOS=`cat content/ios/changelog.md`
CMS=`cat content/cms/changelog.md`

ANDROID="${ANDROID/#$REPLACE_STR/$REPLACEMENT}"
IOS="${IOS/#$REPLACE_STR/$REPLACEMENT}"
CMS="${CMS/#$REPLACE_STR/$REPLACEMENT}"

echo -e "$ANDROID" > /tmp/out && mv /tmp/out content/android/changelog.md
echo -e "$IOS" > /tmp/out && mv /tmp/out content/ios/changelog.md
echo -e "$CMS" > /tmp/out && mv /tmp/out content/cms/changelog.md