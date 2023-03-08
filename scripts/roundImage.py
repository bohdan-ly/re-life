from PIL import Image, ImageDraw
import sys
import os

# To start working with script please use the syntax
# python3 [path/to/script] [path/to/image] [borderRadius]

# Define the image path
imagePath = sys.argv[1]


def getImageName(file_location):
    filename = file_location.split('/')[-1]
    location = file_location.split('/')[0:-1]
    filename = filename.split('.')
    filename[0] += "_rounded"
    filename = '.'.join(filename)
    new_path = '/'.join(location) + '/' + filename
    return new_path


def add_corners(im, rad=50, bg=False, bgCol='white', bgPix=5):
    bg_im = Image.new('RGB', tuple(x+(bgPix*2) for x in im.size), bgCol)
    ims = [im if not bg else im, bg_im]
    circle = Image.new('L', (rad * 2, rad * 2), 0)
    draw = ImageDraw.Draw(circle)
    draw.ellipse((0, 0, rad * 2, rad * 2), fill=255)
    for i in ims:
        alpha = Image.new('L', i.size, 'white')
        w, h = i.size
        alpha.paste(circle.crop((0, 0, rad, rad)), (0, 0))
        alpha.paste(circle.crop((0, rad, rad, rad * 2)), (0, h - rad))
        alpha.paste(circle.crop((rad, 0, rad * 2, rad)), (w - rad, 0))
        alpha.paste(circle.crop((rad, rad, rad * 2, rad * 2)),
                    (w - rad, h - rad))
        i.putalpha(alpha)
    bg_im.paste(im, (bgPix, bgPix), im)
    return im if not bg else bg_im


im = Image.open(imagePath)
im = add_corners(im, int(sys.argv[2]))
im.save(imagePath)
