from PIL import Image, ImageDraw
import os
import sys

# To start working with script please use the syntax
# python3 [path/to/script] [borderRadius]

# Set the border radius value
radius = int(sys.argv[1] or '20')

# Define the directory containing the images
directory = '/Users/bohdan/Desktop/RELife/re-life-rpg/public/icons/'

def add_corners(im, rad):
    circle = Image.new('L', (rad * 2, rad * 2), 0)
    draw = ImageDraw.Draw(circle)
    draw.ellipse((0, 0, rad * 2 - 1, rad * 2 - 1), fill=255)
    alpha = Image.new('L', im.size, 255)
    w, h = im.size
    alpha.paste(circle.crop((0, 0, rad, rad)), (0, 0))
    alpha.paste(circle.crop((0, rad, rad, rad * 2)), (0, h - rad))
    alpha.paste(circle.crop((rad, 0, rad * 2, rad)), (w - rad, 0))
    alpha.paste(circle.crop((rad, rad, rad * 2, rad * 2)), (w - rad, h - rad))
    im.putalpha(alpha)
    return im

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.jpg') or filename.endswith('.png'):
        # Open the image file
        image = Image.open(os.path.join(directory, filename))

        # Apply the border radius
        image = add_corners(image, radius)

        # Save the modified image
        image.save(os.path.join(directory, filename))
