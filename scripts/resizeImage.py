from PIL import Image, ImageDraw
import sys
import os

# To start working with script please use the syntax
# python3 [path/to/script] [path/to/image] [size]

# Define the image path
imagePath = sys.argv[1]
size = int(sys.argv[2]), int(sys.argv[2])


def getImageName(file_location):
    filename = file_location.split('/')[-1]
    location = file_location.split('/')[0:-1]
    filename = filename.split('.')
    filename[0] = "icon-" + sys.argv[2] + "x" + sys.argv[2]
    filename = '.'.join(filename)
    new_path = '/'.join(location) + '/' + filename
    return new_path


try:
    im = Image.open(imagePath)
    im.thumbnail(size, Image.Resampling.LANCZOS)
    im.save(getImageName(imagePath))
except IOError:
    print("cannot create thumbnail for '%s'" % sys.argv[2])
